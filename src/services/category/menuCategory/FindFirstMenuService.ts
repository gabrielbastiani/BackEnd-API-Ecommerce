import prismaClient from '../../../prisma';

class FindFirstMenuService {
    async execute() {
        const findFirst = await prismaClient.menuCategory.findFirst({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                category: true,
                imagemenucategories: true,
            }
        })
        return findFirst;
    }
}

export { FindFirstMenuService }