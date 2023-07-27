import prismaClient from "../../../prisma";

interface VariationRequest {
    variation_id: string;
}

class DeleteALLImageVariationProductService {
    async execute({ variation_id }: VariationRequest) {
        const image = await prismaClient.photoVariation.deleteMany({
            where: {
                variation_id: variation_id
            }
        });

        return image;

    }

}

export { DeleteALLImageVariationProductService }