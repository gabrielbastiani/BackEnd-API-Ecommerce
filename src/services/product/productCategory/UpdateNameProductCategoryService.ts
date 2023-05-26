import prismaClient from "../../../prisma";

interface ProductCategoryRequest {
    productCategory_id: string;
    name: string;
}

class UpdateNameProductCategoryService {
    async execute({ productCategory_id, name }: ProductCategoryRequest) {

        const relation = await prismaClient.productCategory.update({
            where: {
                id: productCategory_id
            },
            data: {
                name: name
            }
        });

        return relation;

    }
}

export { UpdateNameProductCategoryService }