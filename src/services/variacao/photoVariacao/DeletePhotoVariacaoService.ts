import prismaClient from "../../../prisma";

interface VariacaoRequest {
    photoVariacao_id: string;
}

class DeletePhotoVariacaoService {
    async execute({ photoVariacao_id }: VariacaoRequest) {
        const image = await prismaClient.photoVariacao.delete({
            where: {
                id: photoVariacao_id
            }
        })

        return image;

    }

}

export { DeletePhotoVariacaoService }