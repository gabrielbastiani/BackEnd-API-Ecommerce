import prismaClient from "../../../prisma";

interface RelationAttributeProductRequest {
    product_id: string;
}

class DeleteProductRelationAllService {
    async execute({ product_id }: RelationAttributeProductRequest) {
        const productGrupo = await prismaClient.relationAttributeProduct.deleteMany({
            where: {
                product_id: product_id
            }
        });

        return productGrupo;

    }
}

export { DeleteProductRelationAllService }