import prismaClient from "../../../prisma";

interface VariacaoRequest {
    variacao_id: string;
}

class DeleteALLPhotoVariacaoService {
    async execute({ variacao_id }: VariacaoRequest) {
        const image = await prismaClient.photoVariacao.deleteMany({
            where: {
                variacao_id: variacao_id
            }
        });

        return image;

    }

}

export { DeleteALLPhotoVariacaoService }