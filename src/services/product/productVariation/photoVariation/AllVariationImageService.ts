import prismaClient from "../../../../prisma";

interface PhotoVariationRequest {
    productVariation_id: string;
}

class AllVariationImageService {
    async execute({ productVariation_id }: PhotoVariationRequest) {
        const allVariation = await prismaClient.photoVariation.findMany({
            where: {
                productVariation_id: productVariation_id
            }
        });

        return allVariation;

    }
}

export { AllVariationImageService }