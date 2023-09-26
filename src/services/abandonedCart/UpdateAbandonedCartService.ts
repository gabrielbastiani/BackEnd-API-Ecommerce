import prismaClient from "../../prisma";

interface AbandonedRequest {
    customer_id: string;
    cart_abandoned: any;
    total_cart: number;
}

class UpdateAbandonedCartService {
    async execute({ customer_id, cart_abandoned, total_cart }: AbandonedRequest) {
        const abandoned = await prismaClient.abandonedCart.updateMany({
            where: {
                customer_id: customer_id
            },
            data: {
                cart_abandoned: cart_abandoned,
                total_cart: total_cart
            }
        });

        return abandoned;

    }
}

export { UpdateAbandonedCartService }