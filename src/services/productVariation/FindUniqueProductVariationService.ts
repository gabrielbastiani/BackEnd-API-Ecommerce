import prismaClient from '../../prisma';

interface VariationRequest {
    productVariation_id: string;
}

class FindUniqueProductVariationService {
    async execute({ productVariation_id }: VariationRequest) {
        const findVariation = await prismaClient.productVariation.findUnique({
            where: {
                id: productVariation_id
            },
            include: {
                product: true,
                variation: true
            }
        })
        return findVariation;
    }
}

export { FindUniqueProductVariationService }