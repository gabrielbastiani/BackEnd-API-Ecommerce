import prismaClient from "../../../prisma";

interface VariationRequest {
    photoVariation_id: string;
    order: number;
}

class UpdateOrderImageVariationService {
    async execute({ photoVariation_id, order }: VariationRequest) {
        const imageVariation = await prismaClient.photoVariation.update({
            where: {
                id: photoVariation_id
            },
            data: {
                order: order,
            }
        })

        return imageVariation;

    }
}

export { UpdateOrderImageVariationService }