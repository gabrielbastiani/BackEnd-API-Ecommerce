import prismaClient from '../../prisma';

class PageListAllAvaliacaoService {
    async execute(page = 1, limit = 999999) {

        const skip = limit * (page - 1);

        const allAval = await prismaClient.avaliacao.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                user: true,
                product: true
            }
        });

        const allAvaliacao = await prismaClient.avaliacao.findMany({
            skip,
            take: limit,
            orderBy: {
                created_at: 'desc'
            },
            include: {
                user: true,
                product: true
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            allAvaliacao,
            total: allAval.length,
            total_pages: Math.ceil(allAval.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListAllAvaliacaoService }