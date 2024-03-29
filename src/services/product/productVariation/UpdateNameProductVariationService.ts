import prismaClient from "../../../prisma";

interface VariationRequest {
    productVariation_id: string;
    variationName: string;
}

class UpdateNameProductVariationService {
    async execute({ productVariation_id, variationName }: VariationRequest) {
        const variation = await prismaClient.productVariation.update({
            where: {
                id: productVariation_id
            },
            data: {
                variationName: variationName
            }
        })
        return variation;
    }
}

export { UpdateNameProductVariationService }