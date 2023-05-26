import prismaClient from "../../../prisma";

interface RelationRequest {
    relationProductCategory_id: string;
    parentId: string;
}

class UpdateRelationIDProductCategoryService {
    async execute({ relationProductCategory_id, parentId }: RelationRequest) {

        const relation = await prismaClient.productCategory.update({
            where: {
                id: relationProductCategory_id
            },
            data: {
                parentId: String(parentId)
            }
        });

        return relation;

    }
}

export { UpdateRelationIDProductCategoryService }