import prismaClient from "../../../prisma";

interface RelationAttributeProductRequest {
    product_id: string;
}

class FirstFirstRelationAttributeProductService {
    async execute({ product_id }: RelationAttributeProductRequest) {
        const dateRelationAttribute = await prismaClient.relationAttributeProduct.findFirst({
            where: {
                product_id: product_id,
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                product: true,
                typeAttribute: true,
                valueAttribute: true
            }
        });

        return dateRelationAttribute;

    }
}

export { FirstFirstRelationAttributeProductService }