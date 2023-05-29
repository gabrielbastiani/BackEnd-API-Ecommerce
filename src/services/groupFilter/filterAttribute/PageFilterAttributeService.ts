import prismaClient from '../../../prisma';

class PageFilterAttributeService {
    async execute(page = 1, limit = 999999) {

        const skip = limit * (page - 1);

        const filterAll = await prismaClient.filterAttribute.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                groupFilter: true,
                imagefilteratributos: true
            }
        });

        const filterAttributes = await prismaClient.filterAttribute.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                groupFilter: true,
                imagefilteratributos: true
            },
            skip,
            take: limit
        });

        const data = {
            filterAttributes,
            total: filterAll.length,
            total_pages: Math.ceil(filterAll.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageFilterAttributeService }