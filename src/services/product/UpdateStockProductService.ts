import prismaClient from "../../prisma";

interface ProductRequest {
    product_id: string;
    stock: number;
}

class UpdateStockProductService {
    async execute({ product_id, stock }: ProductRequest) {
        const updateStock = await prismaClient.product.update({
            where: {
                id: product_id
            },
            data: {
                stock: stock
            }
        })

        return updateStock;

    }
}

export { UpdateStockProductService }