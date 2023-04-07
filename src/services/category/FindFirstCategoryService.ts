import prismaClient from '../../prisma';

class FindFirstCategoryService {
    async execute() {
        const findFirstCategory = await prismaClient.category.findFirst({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                subcategories: true,
                product: true,
                loja: true
            }
        })
        return findFirstCategory;
    }
}

export { FindFirstCategoryService }