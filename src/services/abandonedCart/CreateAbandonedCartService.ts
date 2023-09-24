import prismaClient from "../../prisma";

interface AbandonedRequest {
    customer_id: string;
    store_cart_id: string;
    cart_abandoned: any;
}

class CreateAbandonedCartService {
    async execute({ customer_id, store_cart_id, cart_abandoned }: AbandonedRequest) {
        const abandoned = await prismaClient.abandonedCart.create({
            data: {
                customer_id: customer_id,
                store_cart_id: store_cart_id,
                cart_abandoned: cart_abandoned
            }
        });

        return abandoned;

    }
}

export { CreateAbandonedCartService }