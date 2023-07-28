import prismaClient from "../../../prisma";

interface VariationRequest {
    product_id: string;
}

class AllVariationsProductService {
    async execute({ product_id }: VariationRequest) {
        const findVariation = await prismaClient.productVariation.findMany({
            where: {
                product_id: product_id
            },
            include: {
                product: true,
                photovariations: true
            }
        })
        return findVariation;
    }
}

export { AllVariationsProductService }