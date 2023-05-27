import prismaClient from '../../prisma';

class PageListAllAvalietionProductIDService {
    async execute(page = 1, limit = 999999, product_id: string) {

        const skip = limit * (page - 1);

        const allAvalietionProduct = await prismaClient.avalietion.findMany({
            where: {
                product_id: product_id
            },
            orderBy: {
                created_at: 'desc'
            },
            include: {
                customer: true,
                product: true,
                store: true
            }
        });

        const productAvalietion = await prismaClient.avalietion.findMany({
            where: {
                product_id: product_id
            },
            orderBy: {
                created_at: 'desc'
            },
            include: {
                customer: true,
                product: true,
                store: true
            },
            skip,
            take: limit,
        });

        const data = {
            productAvalietion,
            total: allAvalietionProduct.length,
            total_pages: Math.ceil(allAvalietionProduct.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListAllAvalietionProductIDService }