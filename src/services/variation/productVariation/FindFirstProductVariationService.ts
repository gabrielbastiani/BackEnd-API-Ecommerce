import prismaClient from '../../../prisma';

interface VariationRequest {
    variation_id: string;
}

class FindFirstProductVariationService {
    async execute({ variation_id }: VariationRequest) {
        const findVariation = await prismaClient.productVariation.findFirst({
            where: {
                variation_id: variation_id
            },
            orderBy: {
                created_at: 'desc'
            },
            include: {
                product: true,
                variation: true
            }
        })
        return findVariation;
    }
}

export { FindFirstProductVariationService }