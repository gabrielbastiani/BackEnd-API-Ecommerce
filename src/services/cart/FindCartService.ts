import prismaClient from '../../prisma';

interface CartFindRequest {
    store_cart_id: string;
    product_id: string;
}

class FindCartService {
    async execute({ product_id, store_cart_id }: CartFindRequest) {
        const exactCart = await prismaClient.cart.findFirst({
            where: {
                product_id: product_id,
                AND: {
                    store_cart_id: store_cart_id
                }
            },
            include: {
                product: true
            }
        });

        return exactCart;
    }
}

export { FindCartService }