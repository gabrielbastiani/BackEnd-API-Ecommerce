import prismaClient from "../../../prisma";

interface PhotoRequest {
    photoVariacao_id: any;
    order: number;
}

class UpdateOrderPhotoVariacaoService {
    async execute({ photoVariacao_id, order }: PhotoRequest) {
        const photoOrderVariacao = await prismaClient.photoVariacao.update({
            where: {
                id: String(photoVariacao_id)
            },
            data: {
                order: order,
            }
        })

        return photoOrderVariacao;

    }
}

export { UpdateOrderPhotoVariacaoService }