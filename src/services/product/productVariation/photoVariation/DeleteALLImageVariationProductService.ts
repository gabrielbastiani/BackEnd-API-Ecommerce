import prismaClient from "../../../../prisma";

interface VariationRequest {
    productVariation_id: string;
}

class DeleteALLImageVariationProductService {
    async execute({ productVariation_id }: VariationRequest) {
        const image = await prismaClient.photoVariation.deleteMany({
            where: {
                productVariation_id: productVariation_id
            }
        });

        return image;

    }

}

export { DeleteALLImageVariationProductService }