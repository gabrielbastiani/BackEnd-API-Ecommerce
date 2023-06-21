import prismaClient from "../../../prisma";

interface RelationAttributeProductRequest {
    product_id: string;
}

class ProductAttributeService {
    async execute({ product_id }: RelationAttributeProductRequest) {
        const allAttributes = await prismaClient.relationAttributeProduct.findMany({
            where: {
                product_id: product_id,
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

export { ProductAttributeService }