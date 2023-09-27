import moment from "moment";
import prismaClient from "../../prisma";

interface AbandonedRequest {
    customer_id: string;
    cart_abandoned: any;
    total_cart: number;
}

class UpdateAbandonedCartService {
    async execute({ customer_id, cart_abandoned, total_cart }: AbandonedRequest) {

        const dataCart = moment(new Date()).format('DD/MM/YYYY');

        const abandoned = await prismaClient.abandonedCart.updateMany({
            where: {
                customer_id: customer_id
            },
            data: {
                cart_abandoned: cart_abandoned,
                total_cart: total_cart
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
                total_day: mapValues,
                lost_orders: findLastAbandoned.length
            }
        });

        return abandoned;

    }
}

export { UpdateAbandonedCartService }