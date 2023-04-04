import prismaClient from '../../../prisma';

class ExactPageListAllSubCategorysService {
    async execute(page = 1, limit = 5, subcategory_id: string) {

        const skip = limit * (page - 1);

        const subCategoryAll = await prismaClient.subCategory.findMany({
            where: {
                id: subcategory_id
            },
            include: {
                category: true,
                product: true,
                loja: true
            },
            orderBy: {
                order: 'asc'
            }
        });

        const subCategory = await prismaClient.subCategory.findMany({
            where: {
                id: subcategory_id
            },
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
            subCategory,
            total: subCategoryAll.length,
            total_pages: Math.ceil(subCategoryAll.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { ExactPageListAllSubCategorysService }