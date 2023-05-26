import prismaClient from "../../../prisma";

interface RelationRequest {
    relationProductCategory_id: string;
    order: number;
}

class UpdateOrderProductCategoryService {
    async execute({ relationProductCategory_id, order }: RelationRequest) {

        const relation = await prismaClient.productCategory.update({
            where: {
                id: relationProductCategory_id
            },
            data: {
                order: order
            }
        });

        return relation;

    }
}

export { UpdateOrderProductCategoryService }