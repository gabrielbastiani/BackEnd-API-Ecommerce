import prismaClient from '../../prisma';

class PageListAllAvaliacaoProductIDService {
    async execute(page = 1, limit = 999999, product_id: string) {

        const skip = limit * (page - 1);

        const allAvaliacaoProduct = await prismaClient.avaliacao.findMany({
            where: {
                product_id: product_id
            },
            orderBy: {
                created_at: 'desc'
            },
            include: {
                product: true
            }
        });

        const productAvaliacao = await prismaClient.avaliacao.findMany({
            where: {
                product_id: product_id
            },
            orderBy: {
                created_at: 'desc'
            },
            include: {
                product: true
            },
            skip,
            take: limit,
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            productAvaliacao,
            total: allAvaliacaoProduct.length,
            total_pages: Math.ceil(allAvaliacaoProduct.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListAllAvaliacaoProductIDService }