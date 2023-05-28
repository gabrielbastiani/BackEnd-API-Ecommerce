import prismaClient from '../../../prisma';

interface PhotoVariationRequest {
    variation_id: string;
}

class AllVariationImageService {
    async execute({ variation_id }: PhotoVariationRequest) {
        const allVariation = await prismaClient.photoVariation.findMany({
            where: {
                variation_id: variation_id
            }
        });

        return allVariation;

    }
}

export { AllVariationImageService }