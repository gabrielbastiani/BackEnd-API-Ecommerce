import prismaClient from "../../../prisma";

interface VariacaoRequest {
    product_id: string;
}

class DeleteALLPhotoVariacaoService {
    async execute({ product_id }: VariacaoRequest) {
        const photo = await prismaClient.photoVariacao.deleteMany({
            where: {
                product_id: product_id
            }
        });

        return photo;

    }

}

export { DeleteALLPhotoVariacaoService }