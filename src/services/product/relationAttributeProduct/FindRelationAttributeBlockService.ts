import prismaClient from '../../../prisma';

interface RelationAttributeProductRequest {
    product_id: string;
}

class FindRelationAttributeBlockService {
    async execute({ product_id }: RelationAttributeProductRequest) {
        const allAtributos = await prismaClient.relationAttributeProduct.findMany({
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

        return allAtributos;

    }
}

export { FindRelationAttributeBlockService }