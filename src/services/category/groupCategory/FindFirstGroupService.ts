import prismaClient from '../../../prisma';

class FindFirstGroupService {
    async execute() {
        const findGroupFirst = await prismaClient.groupCategoy.findFirst({
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