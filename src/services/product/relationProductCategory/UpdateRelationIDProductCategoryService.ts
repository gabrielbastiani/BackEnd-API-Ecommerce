import prismaClient from "../../../prisma";

interface RelationRequest {
    relationProductCategory_id: string;
    relationId: string;
}

class UpdateRelationIDProductCategoryService {
    async execute({ relationProductCategory_id, relationId }: RelationRequest) {

        const relation = await prismaClient.relationProductCategory.update({
            where: {
                id: relationProductCategory_id
            },
            data: {
                relationId: String(relationId)
            }
        });

        return relation;

    }
}

export { UpdateRelationIDProductCategoryService }