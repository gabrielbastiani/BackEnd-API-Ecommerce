import prismaClient from '../../prisma';

class ListExactCategoryService {
    async execute({ category_id }) {
        const exactCategory = await prismaClient.category.findUnique({
            where: {
                id: String(category_id)
            },
            select: {
                categoryName: true,
                codigo: true
            }
        })
        return exactCategory;
    }
}

export { ListExactCategoryService }