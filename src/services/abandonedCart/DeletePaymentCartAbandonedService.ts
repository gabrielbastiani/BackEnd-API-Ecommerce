import moment from "moment";
import prismaClient from "../../prisma";

interface AbandonedRequest {
    customer_id: string;
}

class DeletePaymentCartAbandonedService {
    async execute({ customer_id }: AbandonedRequest) {

        const dataCart = moment(new Date()).format('DD/MM/YYYY');

        const abandoned = await prismaClient.abandonedCart.deleteMany({
            where: {
                customer_id: customer_id
            }
        });

        const findLastAbandoned = await prismaClient.abandonedCart.findMany({
            where: {
                created_at: dataCart
            }
        });

        let mapValues = findLastAbandoned.map(item => item.total_cart).reduce((acumulador, elemento) => acumulador + elemento, 0);

        await prismaClient.totalDayAbandonedCart.updateMany({
            where: {
                day_cart: dataCart
            },
            data: {
                lost_orders: findLastAbandoned.length,
                total_day: mapValues
            }
        });

        const zeroDay = await prismaClient.totalDayAbandonedCart.findFirst({
            where: {
                day_cart: dataCart
            },
            select: {
                lost_orders: true
            }
        });

        const mapZeroDay = zeroDay.lost_orders;

        if (mapZeroDay === 0) {

            await prismaClient.totalDayAbandonedCart.deleteMany({
                where: {
                    day_cart: dataCart
                }
            });

        }

        return abandoned;

    }
}

export { DeletePaymentCartAbandonedService }