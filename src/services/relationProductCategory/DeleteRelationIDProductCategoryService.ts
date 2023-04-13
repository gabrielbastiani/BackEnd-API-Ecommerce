import prismaClient from "../../prisma";

interface RelationRequest {
    relationProductCategory_id: string;
}

class DeleteRelationIDProductCategoryService {
    async execute({ relationProductCategory_id }: RelationRequest) {
        const relation = await prismaClient.relationProductCategory.delete({
            where: {
                id: relationProductCategory_id
            }
        });

        return relation;

    }
}

export { DeleteRelationIDProductCategoryService }