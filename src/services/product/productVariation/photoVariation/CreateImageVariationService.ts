import prismaClient from "../../../../prisma";

interface PhotoRequest {
    productVariation_id: string;
    image: string;
    order: number;
}

class CreateImageVariationService {
    async execute({ productVariation_id, image, order }: PhotoRequest) {
        const variationImage = await prismaClient.photoVariation.create({
            data: {
                productVariation_id: productVariation_id,
                image: image,
                order: order,
            }
        })

        return variationImage;

    }
}

export { CreateImageVariationService }