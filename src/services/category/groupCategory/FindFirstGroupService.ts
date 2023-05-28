import prismaClient from '../../../prisma';

class FindFirstGroupService {
    async execute() {
        const findGroupFirst = await prismaClient.menuCategory.findFirst({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                category: true,
                imagegroupcategories: true,
            }
        })
        return findGroupFirst;
    }
}

export { FindFirstGroupService }