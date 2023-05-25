import prismaClient from '../../prisma';

class ListExactVariacaoService {
    async execute({ variacao_id }) {
        const exactVariacao = await prismaClient.variacao.findUnique({
            where: {
                id: String(variacao_id)
            },
            include: {
                store: true,
                photovariacoes: true,
                product: true,
            },
        })
        return exactVariacao;
    }
}

export { ListExactVariacaoService }