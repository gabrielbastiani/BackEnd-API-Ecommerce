import prismaClient from "../../../prisma";

interface PhotoRequest {
    photoVariacao: string;
    variacao_id: string;
    product_id: string;
    order: number;
    posicao: string;
    slugPosicao: string;
}

class PhotoVariacaoService {
    async execute({ photoVariacao, variacao_id, product_id, order, posicao }: PhotoRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
          }

        const photoVariacaoAll = await prismaClient.photoVariacao.create({
            data: {
                photoVariacao: photoVariacao,
                variacao_id: variacao_id,
                product_id: product_id,
                order: order,
                posicao: posicao,
                slugPosicao: removerAcentos(posicao)
            }
        })

        return photoVariacaoAll;

    }
}

export { PhotoVariacaoService }