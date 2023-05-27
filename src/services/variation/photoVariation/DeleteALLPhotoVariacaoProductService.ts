import prismaClient from "../../../prisma";

interface VariationRequest {
    product_id: string;
}

class DeleteALLPhotoVariacaoProductService {
    async execute({ product_id }: VariationRequest) {
        const image = await prismaClient.photoVariacao.deleteMany({
            where: {
                product_id: product_id
            }
        });

        return image;

    }

}

export { DeleteALLPhotoVariacaoProductService }