import prismaClient from "../../../prisma";

interface VariacaoRequest {
    variacao_id: string;
}

class DeleteALLPhotoVariacaoService {
    async execute({ variacao_id }: VariacaoRequest) {
        const photo = await prismaClient.photoVariacao.deleteMany({
            where: {
                variacao_id: variacao_id
            }
        });

        return photo;

    }

}

export { DeleteALLPhotoVariacaoService }