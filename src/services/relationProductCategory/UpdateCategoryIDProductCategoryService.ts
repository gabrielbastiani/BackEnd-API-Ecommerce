import prismaClient from "../../prisma";

interface RelationRequest {
    relationProductCategory_id: string;
    category_id: string;
}

class UpdateCategoryIDProductCategoryService {
    async execute({ relationProductCategory_id, category_id }: RelationRequest) {

        const relation = await prismaClient.relationProductCategory.update({
            where: {
                id: relationProductCategory_id
            },
            data: {
                category_id: String(category_id)
            }
        });

        return relation;

    }
}

export { UpdateCategoryIDProductCategoryService }