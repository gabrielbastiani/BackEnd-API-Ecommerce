import prismaClient from "../../../prisma";

interface ProductCategoryRequest {
    productCategory_id: string;
}

class DeleteProductCategoryService {
    async execute({ productCategory_id }: ProductCategoryRequest) {
        const deleteCategory = await prismaClient.productCategory.delete({
            where: {
                id: productCategory_id
            }
        });

        return deleteCategory;

    }
}

export { DeleteProductCategoryService }