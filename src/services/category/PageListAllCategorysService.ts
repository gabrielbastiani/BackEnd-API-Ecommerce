import prismaClient from '../../prisma';

class PageListAllCategorysService {
    async execute(page = 1, limit = 5) {

        const skip = limit * (page - 1);

        const categorysAll = await prismaClient.category.findMany({
            orderBy: {
                created_at: 'desc'
            }
        });

        const categorys = await prismaClient.category.findMany({
            select: {
                id: true,
                categoryName: true,
                codigo: true,
                disponibilidade: true,
                created_at: true,
                loja_id: true,
                products:true
            },
            skip,
            take: limit,
            orderBy: {
                created_at: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            categorys,
            total: categorysAll.length,
            total_pages: Math.ceil(categorysAll.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListAllCategorysService }