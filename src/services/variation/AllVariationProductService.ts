import prismaClient from '../../prisma';

interface VariationRequest {
    product_id: string;
}

class AllVariationProductService {
    async execute({ product_id }: VariationRequest) {
        const allVariation = await prismaClient.variation.findMany({
            where: {
                product_id: product_id
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                photovariations: true,
                product: true
            }
        });

        return allVariation;

    }
}

export { AllVariationProductService }