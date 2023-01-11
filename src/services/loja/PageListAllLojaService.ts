import prismaClient from '../../prisma';

class PageListAllLojaService {
    async execute(page = 1, limit = 5) {

        const skip = limit * (page - 1);

        const allLoja = await prismaClient.loja.findMany({
            orderBy: {
                created_at: 'desc'
            }
        });

        const lojas = await prismaClient.loja.findMany({
            select: {
                nameLoja: true,
                cnpjLoja: true,
                emailLoja: true,
                phoneLoja: true,
                ruaLoja: true,
                numeroLoja: true,
                bairroLoja: true,
                complementoLoja: true,
                cepLoja: true,
                cityLoja: true,
                stateLoja: true,
                created_at: true,
                users: true,
                categories: true,
                products: true,
                variacoes: true,
                avaliacoes: true,
                pedidos: true,
                pagamentos: true,
                entregas: true,
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