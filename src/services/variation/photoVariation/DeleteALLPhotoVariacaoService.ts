import prismaClient from "../../../prisma";

interface VariationRequest {
    variacao_id: string;
}

class DeleteALLPhotoVariacaoService {
    async execute({ variacao_id }: VariationRequest) {
        const image = await prismaClient.photoVariacao.deleteMany({
            where: {
                variacao_id: variacao_id
            }
        });

        return image;

    }

}

export { DeleteALLPhotoVariacaoService }