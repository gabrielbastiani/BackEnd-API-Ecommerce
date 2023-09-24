import prismaClient from "../../prisma";

interface AbandonedRequest {
    customer_id: string;
    cart_abandoned: any;
}

class UpdateAbandonedCartService {
    async execute({ customer_id, cart_abandoned }: AbandonedRequest) {
        const abandoned = await prismaClient.abandonedCart.updateMany({
            data: {
                customer_id: customer_id,
                cart_abandoned: cart_abandoned
            }
        });

        return abandoned;

    }
}

export { UpdateAbandonedCartService }