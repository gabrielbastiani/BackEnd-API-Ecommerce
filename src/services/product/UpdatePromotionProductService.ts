import prismaClient from "../../prisma";

interface ProductRequest {
    product_id: string;
    promotion: number;
}

class UpdatePromotionProductService {
    async execute({ product_id, promotion }: ProductRequest) {
        const updateProduct = await prismaClient.product.update({
            where: {
                id: product_id
            },
            data: {
                promotion: promotion
            }
        })

        return updateProduct;

    }
}

export { UpdatePromotionProductService }