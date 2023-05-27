import prismaClient from "../../../prisma";

interface RelationAttributeProductRequest {
    product_id: string;
}

class AllRelationAttributeProductService {
    async execute({ product_id }: RelationAttributeProductRequest) {
        const allAttributes = await prismaClient.relationAttributeProduct.findMany({
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

        return allAttributes;

    }
}

export { AllRelationAttributeProductService }