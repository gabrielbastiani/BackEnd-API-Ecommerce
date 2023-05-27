import prismaClient from '../../prisma';

class PageListAllAvalietionService {
    async execute(page = 1, limit = 999999) {

        const skip = limit * (page - 1);

        const avalietionsAll = await prismaClient.avalietion.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                customer: true,
                product: true,
                store: true
            }
        });

        const allAvalietion = await prismaClient.avalietion.findMany({
            skip,
            take: limit,
            orderBy: {
                created_at: 'desc'
            },
            include: {
                customer: true,
                product: true,
                store: true
            }
        });

        const data = {
            allAvalietion,
            total: avalietionsAll.length,
            total_pages: Math.ceil(avalietionsAll.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListAllAvalietionService }