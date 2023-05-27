import prismaClient from '../../prisma';

interface VariationRequest {
    variation_id: string;
}

class FindUniqueVariationService {
    async execute({ variation_id }: VariationRequest) {
        const uniqueVariation = await prismaClient.variation.findUnique({
            where: {
                id: variation_id
            },
            include: {
                photovariations: true,
                product: true
            }
        });

        return uniqueVariation;

    }
}

export { FindUniqueVariationService }