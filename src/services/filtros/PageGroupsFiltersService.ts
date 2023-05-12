import prismaClient from '../../prisma';

class PageGroupsFiltersService {
    async execute(page = 1, limit = 999999) {

        const skip = limit * (page - 1);

        const groupsAll = await prismaClient.groupFilter.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                filteratributos: true,
                filtercategories: true
            }
        });

        const filtrosGroups = await prismaClient.groupFilter.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                filteratributos: true,
                filtercategories: true
            },
            skip,
            take: limit
        });

        const data = {
            filtrosGroups,
            total: groupsAll.length,
            total_pages: Math.ceil(groupsAll.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageGroupsFiltersService }