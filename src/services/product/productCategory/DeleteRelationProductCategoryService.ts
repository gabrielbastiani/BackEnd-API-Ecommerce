import prismaClient from "../../../prisma";

interface RelationRequest {
    parentId: string;
}

class DeleteRelationProductCategoryService {
    async execute({ parentId }: RelationRequest) {
        const relation = await prismaClient.productCategory.deleteMany({
            where: {
                parentId: parentId
            }
        });

        return relation;

    }
}

export { DeleteRelationProductCategoryService }