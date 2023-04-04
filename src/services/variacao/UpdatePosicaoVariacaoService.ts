import prismaClient from '../../prisma';

interface VariacaoRequest {
    variacao_id: any;
    posicao: string;
    slugPosicao: string;
}

class UpdatePosicaoVariacaoService {
    async execute({ variacao_id, posicao }: VariacaoRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const exactVariacao = await prismaClient.variacao.update({
            where: {
                id: String(variacao_id)
            },
            data: {
                posicao: posicao,
                slugPosicao: removerAcentos(posicao)
            }
        })
        return exactVariacao;
    }
}

export { UpdatePosicaoVariacaoService }