import prismaClient from "../../../prisma";

interface VariacaoRequest {
    photovariacao_id: string;
}

class DeletePhotoVariacaoService {
    async execute({ photovariacao_id }: VariacaoRequest) {
        const photo = await prismaClient.photoVariacao.delete({
            where: {
                id: photovariacao_id
            }
        })

        return photo;

    }

}

export { DeletePhotoVariacaoService }