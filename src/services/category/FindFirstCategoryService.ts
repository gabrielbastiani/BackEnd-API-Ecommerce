import prismaClient from '../../prisma';

class FindFirstCategoryService {
    async execute() {
        const findFirstCategory = await prismaClient.category.findFirst({
            orderBy: {
                created_at: 'desc'
            }
        });
        return findFirstCategory;
    }
}

export { FindFirstCategoryService }