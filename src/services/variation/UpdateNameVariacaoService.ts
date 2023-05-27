import prismaClient from '../../prisma';

interface VariacaoRequest {
    variacao_id: any;
    nameVariacao: string;
    slug: string;
}

class UpdateNameVariacaoService {
    async execute({ variacao_id, nameVariacao }: VariacaoRequest) {

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
                nameVariacao: nameVariacao,
                slug: removerAcentos(nameVariacao)
            }
        })
        return exactVariacao;
    }
}

export { UpdateNameVariacaoService }