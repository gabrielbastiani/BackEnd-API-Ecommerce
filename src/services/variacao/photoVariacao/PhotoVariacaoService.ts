import prismaClient from "../../../prisma";

interface PhotoRequest {
    photoVariacao: string;
    variacao_id: string;
    product_id: string;
}

class PhotoVariacaoService {
    async execute({ photoVariacao, variacao_id, product_id }: PhotoRequest) {

        const photoVariacaoAll = await prismaClient.photoVariacao.create({
            data: {
                photoVariacao: photoVariacao,
                variacao_id: variacao_id,
                product_id: product_id
            },
            select: {
                id: true,
                photoVariacao: true,
                variacao_id: true,
                created_at: true,
                product_id: true
            }
        })

        return photoVariacaoAll;

    }
}

export { PhotoVariacaoService }