import prismaClient from "../../../prisma";

interface RelationAttributeProductRequest {
    parentId: string;
}

class AllProductAttributeParentIDService {
    async execute({ parentId }: RelationAttributeProductRequest) {
        const allAttributes = await prismaClient.relationAttributeProduct.findMany({
            where: {
                parentId: parentId
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

export { AllProductAttributeParentIDService }