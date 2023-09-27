import prismaClient from '../../prisma';

class PageAbandonedCartService {
    async execute(page = 1, limit = 15) {

        const skip = limit * (page - 1);

        const allAbandoned = await prismaClient.totalDayAbandonedCart.findMany({
            orderBy: {
                created_at: 'asc'
            }
        });

        const abandoned = await prismaClient.totalDayAbandonedCart.findMany({
            orderBy: {
                created_at: 'asc'
            },
            skip,
            take: limit
        });

        const data = {
            abandoned,
            total: allAbandoned.length,
            total_pages: Math.ceil(allAbandoned.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageAbandonedCartService }