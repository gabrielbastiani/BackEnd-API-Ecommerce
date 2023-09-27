import moment from "moment";
import prismaClient from "../../prisma";

interface AbandonedRequest {
    customer_id: string;
    store_cart_id: string;
    cart_abandoned: any;
    total_cart: number;
}

class CreateAbandonedCartService {
    async execute({ customer_id, store_cart_id, cart_abandoned, total_cart }: AbandonedRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase()
              .replace(/ +/g, "-")
              .replace(/-{2,}/g, "-")
              .replace(/[/]/g, "-");
          }

        const dataCart = moment(new Date()).format('DD/MM/YYYY');

        const abandoned = await prismaClient.abandonedCart.create({
            data: {
                customer_id: customer_id,
                created_at: dataCart,
                slug: removerAcentos(dataCart),
                store_cart_id: store_cart_id,
                cart_abandoned: cart_abandoned,
                total_cart: total_cart
            }
        });

        const findLastAbandoned = await prismaClient.abandonedCart.findMany({
            where: {
                created_at: dataCart
            }
        });

        if (findLastAbandoned.length === 1) {
            await prismaClient.totalDayAbandonedCart.create({
                data: {
                    day_cart: dataCart,
                    lost_orders: findLastAbandoned.length,
                    total_day: total_cart
                }
            });

            return abandoned;
        }

        const lastAbandoned = await prismaClient.abandonedCart.findMany({
            where: {
                created_at: dataCart
            },
            orderBy: {
                created_cart: 'asc'
            }
        });

        let mapValues = lastAbandoned.map(item => item.total_cart).reduce((acumulador, elemento) => acumulador + elemento, 0);

        await prismaClient.totalDayAbandonedCart.updateMany({
            where: {
                day_cart: dataCart
            },
            data: {
                lost_orders: findLastAbandoned.length,
                total_day: mapValues
            }
        });

        return abandoned;

    }
}

export { CreateAbandonedCartService }