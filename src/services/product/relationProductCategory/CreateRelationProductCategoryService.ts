import prismaClient from "../../../prisma";

interface RelationRequest {
    product_id: string;
    category_id: string;
    nivel: number;
    relationId: string;
    order: number;
    store_id: string;
}

class CreateRelationProductCategoryService {
    async execute({ product_id, category_id, nivel, relationId, order, store_id }: RelationRequest) {

        const categoryAlredyExist = await prismaClient.relationProductCategory.findFirst({
            where: {
                product_id: product_id,
                category_id: category_id,
            }
        })

        if (categoryAlredyExist) {
            throw new Error("Categoria já cadastrada nesse produto!")
        }

        const relation = await prismaClient.relationProductCategory.create({
            data: {
                product_id: product_id,
                category_id: category_id,
                nivel: nivel,
                relationId: relationId,
                order: Number(order),
                store_id: store_id
            }
        });

        return relation;

    }
}

export { CreateRelationProductCategoryService }