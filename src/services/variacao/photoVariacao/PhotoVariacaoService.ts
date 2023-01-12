import prismaClient from "../../../prisma";

interface PhotoRequest {
    photoVariacao: string;
    variacao_id: string;
}

class PhotoVariacaoService {
    async execute({ photoVariacao, variacao_id }: PhotoRequest) {

        const photoVariacaoAll = await prismaClient.photoVariacao.create({
            data: {
                photoVariacao: photoVariacao,
                variacao_id: variacao_id,
            },
            select: {
                id: true,
                photoVariacao: true,
                variacao_id: true,
                created_at: true
            }
        })

        return photoVariacaoAll;

    }
}

export { PhotoVariacaoService }