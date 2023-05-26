import prismaClient from "../../../prisma";

interface ProductCategoryRequest {
    product_id: string;
}

class DeleteAllProductCategoryService {
    async execute({ product_id }: ProductCategoryRequest) {
        const deletesAll = await prismaClient.productCategory.deleteMany({
            where: {
                product_id: product_id
            }
        });

        return deletesAll;

    }
}

export { DeleteAllProductCategoryService }