import moment from "moment";
import prismaClient from "../../prisma";

interface AbandonedRequest {
    customer_id: string;
    store_cart_id: string;
    created_at: string;
    cart_abandoned: any;
}

class CreateAbandonedCartService {
    async execute({ customer_id, store_cart_id, cart_abandoned, created_at }: AbandonedRequest) {

        const dataCart = moment(new Date()).format('DD/MM/YYYY');

        const findCustomer = await prismaClient.abandonedCart.findFirst({
            where: {
                nivel: "0",
                created_at: dataCart
            }
        });

        if (findCustomer === null) {

            const abandoned = await prismaClient.abandonedCart.create({
                data: {
                    customer_id: customer_id,
                    created_at: created_at,
                    store_cart_id: store_cart_id,
                    nivel: "0",
                    cart_abandoned: cart_abandoned
                }
            });

            return abandoned;

        }

        const abandonedExist = await prismaClient.abandonedCart.create({
            data: {
                customer_id: customer_id,
                created_at: created_at,
                store_cart_id: store_cart_id,
                nivel: "1",
                cart_abandoned: cart_abandoned
            }
        });

        return abandonedExist;

    }
}

export { CreateAbandonedCartService }