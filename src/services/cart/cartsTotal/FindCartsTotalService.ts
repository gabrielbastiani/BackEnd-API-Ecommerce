import prismaClient from '../../../prisma';

interface CartTotalFindRequest {
    store_cart_id: string;
}

class FindCartsTotalService {
    async execute({ store_cart_id }: CartTotalFindRequest) {
        const exactCart = await prismaClient.cartTotal.findFirst({
            where: {
                store_cart_id: store_cart_id
            }
        });

        return exactCart;
    }
}

export { FindCartsTotalService }