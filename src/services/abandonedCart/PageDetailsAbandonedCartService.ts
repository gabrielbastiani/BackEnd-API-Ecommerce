import prismaClient from '../../prisma';

class PageDetailsAbandonedCartService {
    async execute(page = 1, limit = 15, slug_day: string) {

        const skip = limit * (page - 1);

        const allDetailsAbandoned = await prismaClient.abandonedCart.findMany({
            where: {
                slug_day: slug_day
            },
            include: {
                customer: true
            },
            orderBy: {
                created_cart: 'asc'
            }
        });

        const abandonedDetails = await prismaClient.abandonedCart.findMany({
            where: {
                slug_day: slug_day
            },
            include: {
                customer: true
            },
            orderBy: {
                created_cart: 'asc'
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