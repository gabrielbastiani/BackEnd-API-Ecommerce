import prismaClient from "../../../prisma";

interface ProductCategoryRequest {
    product_id: string;
    name: string;
    order: number;
    store_id: string;
}

class CreateProductCategoryService {
    async execute({ product_id, name, order, store_id }: ProductCategoryRequest) {

        const categoryAlredyExist = await prismaClient.productCategory.findFirst({
            where: {
                product_id: product_id,
                name: name,
            }
        });

        if (categoryAlredyExist) {
            throw new Error("Categoria já cadastrada nesse produto!");
        }

        const categories = await prismaClient.productCategory.create({
            data: {
                product_id: product_id,
                name: name,
                order: order,
                store_id: store_id
            }
        });

        return categories;

    }
}

export { CreateProductCategoryService }