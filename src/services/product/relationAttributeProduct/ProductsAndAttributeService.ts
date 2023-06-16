import { StatusRelationAttributeProduct } from "@prisma/client";
import prismaClient from "../../../prisma";

interface AttributeProductRequest {
    product_id: any;
}

class ProductsAndAttributeService {
    async execute({ product_id }: AttributeProductRequest) {
        const allAttributes = await prismaClient.relationAttributeProduct.findMany({
            where: {
                status: StatusRelationAttributeProduct.Disponivel,
                product_id: { in: product_id }
            }
        });

        return allAttributes;

    }
}

export { ProductsAndAttributeService }