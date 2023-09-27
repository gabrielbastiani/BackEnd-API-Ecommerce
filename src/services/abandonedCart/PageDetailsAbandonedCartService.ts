import prismaClient from '../../prisma';

class PageDetailsAbandonedCartService {
    async execute(page = 1, limit = 15, created_at: string) {

        const skip = limit * (page - 1);

        const allDetailsAbandoned = await prismaClient.abandonedCart.findMany({
            where: {
                created_at: created_at
            },
            orderBy: {
                created_at: 'asc'
            }
        });

        const abandonedDetails = await prismaClient.abandonedCart.findMany({
            where: {
                created_at: created_at
            },
            orderBy: {
                created_at: 'asc'
            },
            skip,
            take: limit
        });

        const data = {
            abandonedDetails,
            total: allDetailsAbandoned.length,
            total_pages: Math.ceil(allDetailsAbandoned.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageDetailsAbandonedCartService }