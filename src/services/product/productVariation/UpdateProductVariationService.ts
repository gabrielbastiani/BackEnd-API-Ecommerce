import prismaClient from "../../../prisma";

interface VariationRequest {
    productVariation_id: string;
    product_id: string;
}

class UpdateProductVariationService {
    async execute({ productVariation_id, product_id }: VariationRequest) {
        const variation = await prismaClient.productVariation.update({
            where: {
                id: productVariation_id
            },
            data: {
                product_id: product_id
            }
        })
        return variation;
    }
}

export { UpdateProductVariationService }