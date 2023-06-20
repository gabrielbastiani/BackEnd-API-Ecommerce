import prismaClient from "../../../prisma";

interface RelationAttributeProductRequest {
    relationAttributeProduct_id: string;
}

class AllProductAttributeService {
    async execute({ relationAttributeProduct_id }: RelationAttributeProductRequest) {
        const allAttributes = await prismaClient.relationAttributeProduct.findMany({
            where: {
                id: relationAttributeProduct_id,
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                product: true,
                typeAttribute: true
            }
        });

        return allAttributes;

    }
}

export { AllProductAttributeService }