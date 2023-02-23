import prismaClient from '../../prisma';

class PageListAllLojaService {
    async execute(page = 1, limit = 5) {

        const skip = limit * (page - 1);

        const allLoja = await prismaClient.loja.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                users: true,
                categories: true,
                products: true,
                variacoes: true,
                avaliacoes: true,
                carrinhos: true,
                pagamentos: true,
                entregas: true,
                pedidos: true,
            }
        });

        const lojas = await prismaClient.loja.findMany({
            include: {
                users: true,
                categories: true,
                products: true,
                variacoes: true,
                avaliacoes: true,
                carrinhos: true,
                pagamentos: true,
                entregas: true,
                pedidos: true,
            },
            skip,
            take: limit,
            orderBy: {
                created_at: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            lojas,
            total: allLoja.length,
            total_pages: Math.ceil(allLoja.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListAllLojaService }