import prismaClient from "../../../prisma";

interface PhotoRequest {
    variation_id: string;
    image: string;
    order: number;
}

class CreateImageVariationService {
    async execute({ variation_id, image, order }: PhotoRequest) {
        const variationImage = await prismaClient.photoVariation.create({
            data: {
                variation_id: variation_id,
                image: image,
                order: order,
            }
        })

        return variationImage;

    }
}

export { CreateImageVariationService }