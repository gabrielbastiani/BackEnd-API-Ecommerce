import prismaClient from "../../../../prisma";

interface PhotoVariationRequest {
    photoVariation_id: string;
}

class AllImagesVariationService {
    async execute({ photoVariation_id }: PhotoVariationRequest) {
        const allImages = await prismaClient.photoVariation.findMany({
            where: {
                id: photoVariation_id
            }
        });

        return allImages;

    }
}

export { AllImagesVariationService }