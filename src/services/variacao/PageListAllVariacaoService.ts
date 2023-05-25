import prismaClient from '../../prisma';

class PageListAllVariacaoService {
    async execute(page = 1, limit = 5) {

        const skip = limit * (page - 1);

        const allVariacao = await prismaClient.variacao.findMany({
            orderBy: {
                order: 'asc'
            },
            include: {
                photovariacoes: true,
                item: true,
                product: true,
                store: true
            }
        });

        const variacoesDate = await prismaClient.variacao.findMany({
            include: {
                photovariacoes: true,
                item: true,
                product: true,
                store: true
            },
            skip,
            take: limit,
            orderBy: {
                created_at: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            variacoesDate,
            total: allVariacao.length,
            total_pages: Math.ceil(allVariacao.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListAllVariacaoService }