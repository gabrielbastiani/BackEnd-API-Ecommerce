import prismaClient from '../../prisma';

class FindFirstGroupsService {
    async execute() {
        const allGroups = await prismaClient.groupFilter.findFirst({
            include: {
                filteratributos: true,
                filtercategories: true
            }
        });

        return allGroups;
    }
}

export { FindFirstGroupsService }