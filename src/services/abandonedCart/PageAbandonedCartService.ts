import prismaClient from '../../prisma';

class PageAbandonedCartService {
    async execute(page = 1, limit = 15) {

        const skip = limit * (page - 1);

        const allAbandoned = await prismaClient.abandonedCart.findMany({
            orderBy: {
                created_at: 'asc'
            },
            include: {
                customer: {
                    include: {
                        cartsabandoned: true
                    }
                }
            }
        });

        const abandoned = await prismaClient.abandonedCart.findMany({
            orderBy: {
                created_at: 'asc'
            },
            include: {
                customer: {
                    include: {
                        cartsabandoned: true
                    }
                }
            },
            skip,
            take: limit
        });

        const abandonedFirst = await prismaClient.abandonedCart.findMany({
            where: {
                nivel: "0"
            },
            include: {
                customer: {
                    include: {
                        cartsabandoned: true
                    }
                }
            }
        });

        const data = {
            abandonedFirst,
            abandoned,
            total: allAbandoned.length,
            total_pages: Math.ceil(allAbandoned.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageAbandonedCartService }