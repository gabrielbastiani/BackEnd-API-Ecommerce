import prismaClient from "../../../prisma";

interface VariationRequest {
    productVariation_id: string;
}

class FindFirstProductVariationService {
    async execute({ productVariation_id }: VariationRequest) {
        const findVariation = await prismaClient.productVariation.findFirst({
            where: {
                id: productVariation_id
            },
            orderBy: {
                created_at: 'desc'
            },
            include: {
                product: true,
                photovariations: true
            }
        })
        return findVariation;
    }
}

export { FindFirstProductVariationService }