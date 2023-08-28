import { StatusProduct } from "@prisma/client";
import prismaClient from "../../prisma";

interface AttributeProductRequest {
    product_id: any;
}

class CartProductsService {
    async execute({ product_id }: AttributeProductRequest) {
        const productsCart = await prismaClient.product.findMany({
            where: {
                status: StatusProduct.Disponivel,
                id: { in: product_id }
            },
            include: {
                cupomsproducts: {
                    include: {
                        coupon: true,
                        product: true
                    }
                },
                photoproducts: true,
                relationattributeproducts: {
                    include: {
                        product: true,
                        typeAttribute: true,
                        valueAttribute: true
                    }
                }
            }
        });

        return productsCart;

    }
}

export { CartProductsService }