import prismaClient from '../../prisma';

class FindFirstGroupsService {
    async execute() {
        const allGroups = await prismaClient.groupFilter.findFirst({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                filterattributes: true,
                filtercategories: true,
                typeAttribute: true
            }
        });

        return allGroups;
    }
}

export { FindFirstGroupsService }