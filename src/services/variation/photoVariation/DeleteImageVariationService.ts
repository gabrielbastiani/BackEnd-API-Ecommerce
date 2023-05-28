import prismaClient from "../../../prisma";

interface VariationRequest {
    photoVariation_id: string;
}

class DeleteImageVariationService {
    async execute({ photoVariation_id }: VariationRequest) {
        const image = await prismaClient.photoVariation.delete({
            where: {
                id: photoVariation_id
            }
        })

        return image;

    }

}

export { DeleteImageVariationService }