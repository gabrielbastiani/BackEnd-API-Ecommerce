import prismaClient from '../../prisma';

class PageAvalietionStoreProductIDService {
    async execute(page = 1, limit = 4, product_id: string) {

        const skip = limit * (page - 1);

        const allProductAvaliention = await prismaClient.avalietion.findMany({
            where: {
                product_id: product_id,
                status: "Aprovado"
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

        const avalientionProduct = await prismaClient.avalietion.findMany({
            where: {
                product_id: product_id,
                status: "Aprovado"
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
            avalientionProduct,
            total: allProductAvaliention.length,
            total_pages: Math.ceil(allProductAvaliention.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageAvalietionStoreProductIDService }