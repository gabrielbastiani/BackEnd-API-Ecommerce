import prismaClient from "../../prisma";

interface AttributeProductRequest {
    store_cart_id: string;
}

class CartProductsService {
    async execute({ store_cart_id }: AttributeProductRequest) {
        const productsCart = await prismaClient.cart.findMany({
            where: {
                store_cart_id: store_cart_id
            },
            include: {
                customer: true,
                product: {
                    include: {
                        photoproducts: true,
                        relationattributeproducts: {
                            include: {
                                typeAttribute: true,
                                valueAttribute: true
                            }
                        }
                    }
                }
            }
        });

        return productsCart;

    }
}

export { CartProductsService }