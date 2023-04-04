import prismaClient from '../../../prisma';

class ListExactSubCategoryNameService {
    async execute(page = 1, limit = 21, slug) {

        const skip = limit * (page - 1);

        const subCategoryAll = await prismaClient.subCategory.findMany({
            where: {
                slug: slug
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

        const subCategorys = await prismaClient.subCategory.findMany({
            where: {
                slug: slug
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

        const subFindUnique = await prismaClient.subCategory.findUnique({
            where: {
                slug: slug
            },
            include: {
                category: true,
                product: true,
                loja: true
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            subCategorys,
            subFindUnique,
            total: subCategoryAll.length,
            total_pages: Math.ceil(subCategoryAll.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { ListExactSubCategoryNameService }