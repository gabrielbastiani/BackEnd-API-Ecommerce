import prismaClient from '../../prisma';

class ListExactCategoryService {
    async execute({ category_id }) {
        const exactCategory = await prismaClient.category.findUnique({
            where: {
                id: String(category_id)
            },
            include: {
                loja: true,
                products: true,
            },
        })
        return exactCategory;
    }
}

export { ListExactCategoryService }