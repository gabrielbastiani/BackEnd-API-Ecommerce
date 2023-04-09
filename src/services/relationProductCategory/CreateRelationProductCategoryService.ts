import prismaClient from "../../prisma";

interface RelationRequest {
    product_id: string;
    category_id: string;
    nivel: number;
}

class CreateRelationProductCategoryService {
    async execute({ product_id, category_id, nivel }: RelationRequest) {
        const relation = await prismaClient.relationProductCategory.create({
            data: {
                product_id: product_id,
                category_id: category_id,
                nivel: nivel,
            }
        });

        return relation;

    }
}

export { CreateRelationProductCategoryService }