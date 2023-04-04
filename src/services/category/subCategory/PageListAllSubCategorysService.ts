import prismaClient from '../../../prisma';

class PageListAllSubCategorysService {
    async execute(page = 1, limit = 5) {

        const skip = limit * (page - 1);

        const subCategorysAll = await prismaClient.subCategory.findMany({
            include: {
                category: true,
                product: true,
                loja: true
            },
            orderBy: {
                order: 'asc'
            }
        });

        const subCategorys = await prismaClient.subCategory.findMany({
            include: {
                category: true,
                product: true,
                loja: true
            },
            orderBy: {
                order: 'asc'
            },
            skip,
            take: limit
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            subCategorys,
            total: subCategorysAll.length,
            total_pages: Math.ceil(subCategorysAll.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListAllSubCategorysService }