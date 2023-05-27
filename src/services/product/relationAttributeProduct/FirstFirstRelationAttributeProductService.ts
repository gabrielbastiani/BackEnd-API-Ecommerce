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
                imageattributes: true,
                product: true,
                store: true,
                typeAttribute: true
            }
        });

        return dateRelationAttribute;

    }
}

export { FirstFirstRelationAttributeProductService }