import prismaClient from '../../prisma';

class PageListAllNewslettersService {
    async execute(page = 1, limit = 15) {

        const skip = limit * (page - 1);

        const newsAll = await prismaClient.newsletter.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                loja: true,
            }
        });

        const news = await prismaClient.newsletter.findMany({
            include: {
                loja: true,
            },
            skip,
            take: limit,
            orderBy: {
                created_at: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            news,
            total: newsAll.length,
            total_pages: Math.ceil(newsAll.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListAllNewslettersService }