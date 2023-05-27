import prismaClient from '../../prisma';

class PageListAllVariationService {
    async execute(page = 1, limit = 5) {

        const skip = limit * (page - 1);

        const allVariation = await prismaClient.variation.findMany({
            orderBy: {
                order: 'asc'
            },
            include: {
                _count: true,
                photovariations: true,
                product: true
            }
        });

        const variationDate = await prismaClient.variation.findMany({
            include: {
                _count: true,
                photovariations: true,
                product: true
            },
            skip,
            take: limit,
            orderBy: {
                created_at: 'desc'
            }
        });

        const data = {
            variationDate,
            total: allVariation.length,
            total_pages: Math.ceil(allVariation.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListAllVariationService }