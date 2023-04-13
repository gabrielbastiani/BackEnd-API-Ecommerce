import prismaClient from "../../prisma";

interface RelationRequest {
    relationId: string;
}

class DeleteRelationProductCategoryService {
    async execute({ relationId }: RelationRequest) {
        const relation = await prismaClient.relationProductCategory.deleteMany({
            where: {
                relationId: relationId
            }
        });

        return relation;

    }
}

export { DeleteRelationProductCategoryService }