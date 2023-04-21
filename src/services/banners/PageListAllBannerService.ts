import prismaClient from '../../prisma';

class PageListAllBannerService {
    async execute(page = 1, limit = 999999) {

        const skip = limit * (page - 1);

        const allBanners = await prismaClient.banner.findMany({
            orderBy: {
                created_at: 'desc'
            }
        });

        const banners = await prismaClient.banner.findMany({
            skip,
            take: limit,
            orderBy: {
                created_at: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            banners,
            total: allBanners.length,
            total_pages: Math.ceil(allBanners.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListAllBannerService }