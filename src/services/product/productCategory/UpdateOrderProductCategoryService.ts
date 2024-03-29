import prismaClient from "../../../prisma";

interface ProductCategoryRequest {
    productCategory_id: string;
    order: number;
}

class UpdateOrderProductCategoryService {
    async execute({ productCategory_id, order }: ProductCategoryRequest) {

        const relation = await prismaClient.productCategory.update({
            where: {
                id: productCategory_id
            },
            data: {
                order: order
            }
        });

        return relation;

    }
}

export { UpdateOrderProductCategoryService }