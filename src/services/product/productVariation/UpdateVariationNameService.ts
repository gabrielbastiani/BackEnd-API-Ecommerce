import prismaClient from "../../../prisma";

interface VariationRequest {
    productVariation_id: string;
    variationProduct: string;
}

class UpdateVariationNameService {
    async execute({ productVariation_id, variationProduct }: VariationRequest) {
        const variation = await prismaClient.productVariation.update({
            where: {
                id: productVariation_id
            },
            data: {
                variationProduct: variationProduct
            }
        })
        return variation;
    }
}

export { UpdateVariationNameService }