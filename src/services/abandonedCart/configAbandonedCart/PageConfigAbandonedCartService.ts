import prismaClient from "../../../prisma";

class PageConfigAbandonedCartService {
    async execute(page = 1, limit = 999999) {

        const skip = limit * (page - 1);

        const allConfigAbandoned = await prismaClient.configAbandonedCart.findMany({
            orderBy: {
                time_send_email: 'desc'
            }
        });

        const configs = await prismaClient.configAbandonedCart.findMany({
            orderBy: {
                time_send_email: 'desc'
            },
            skip,
            take: limit
        });

        const data = {
            configs,
            total: allConfigAbandoned.length,
            total_pages: Math.ceil(allConfigAbandoned.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageConfigAbandonedCartService }