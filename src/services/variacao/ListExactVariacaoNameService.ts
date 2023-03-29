import prismaClient from '../../prisma';

interface RequestVariacao {
    slug: string;
}

class ListExactVariacaoNameService {
    async execute({ slug }: RequestVariacao) {
        const exactVariacao = await prismaClient.variacao.findUnique({
            where: {
                slug: slug
            }
        })
        return exactVariacao;
    }
}

export { ListExactVariacaoNameService }