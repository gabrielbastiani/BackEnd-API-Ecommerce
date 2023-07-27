import { StatusProductVariation } from '@prisma/client';
import prismaClient from '../../prisma';

interface VariationRequest {
    product_id: string;
}

class AllVariationProductInStoreService {
    async execute({ product_id }: VariationRequest) {
        const allVariation = await prismaClient.variation.findMany({
            where: {
                product_id: product_id,
                status: StatusProductVariation.Disponivel
            },
            distinct: ['name', 'product_id'],
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

export { AllVariationProductInStoreService }