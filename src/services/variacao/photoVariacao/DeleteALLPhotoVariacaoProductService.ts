import prismaClient from "../../../prisma";

interface VariacaoRequest {
    product_id: string;
}

class DeleteALLPhotoVariacaoProductService {
    async execute({ product_id }: VariacaoRequest) {
        const image = await prismaClient.photoVariacao.deleteMany({
            where: {
                product_id: product_id
            }
        });

        return image;

    }

}

export { DeleteALLPhotoVariacaoProductService }