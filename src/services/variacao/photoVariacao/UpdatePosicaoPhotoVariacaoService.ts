import prismaClient from "../../../prisma";

interface PhotoRequest {
    photoVariacao_id: any;
    posicao: string;
    slugPosicao: string;
}

class UpdatePosicaoPhotoVariacaoService {
    async execute({ photoVariacao_id, posicao }: PhotoRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const photoOrderVariacao = await prismaClient.photoVariacao.update({
            where: {
                id: String(photoVariacao_id)
            },
            data: {
                posicao: posicao,
                slugPosicao: removerAcentos(posicao)
            }
        })

        return photoOrderVariacao;

    }
}

export { UpdatePosicaoPhotoVariacaoService }