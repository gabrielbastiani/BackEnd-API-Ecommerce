import prismaClient from '../../../prisma';

class FindFirstProductVariationService {
    async execute() {
        const findVariation = await prismaClient.productVariation.findFirst({
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