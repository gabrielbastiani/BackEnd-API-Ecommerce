import prismaClient from "../../prisma";

interface ProductRequest {
    product_id: string;
    price: number;
}

class UpdatePriceProductService {
    async execute({ product_id, price }: ProductRequest) {
        const updateProduct = await prismaClient.product.update({
            where: {
                id: product_id
            },
            data: {
                price: price
            }
        })

        return updateProduct;

    }
}

export { UpdatePriceProductService }