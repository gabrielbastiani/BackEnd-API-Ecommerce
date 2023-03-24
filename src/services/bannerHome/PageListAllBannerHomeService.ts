import prismaClient from '../../prisma';

class PageListAllBannerHomeService {
    async execute(page = 1, limit = 5) {

        const skip = limit * (page - 1);

        const allBannerHome = await prismaClient.bannerHome.findMany({
            orderBy: {
                created_at: 'desc'
            }
        });

        const bannerHome = await prismaClient.bannerHome.findMany({
            skip,
            take: limit,
            orderBy: {
                created_at: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            bannerHome,
            total: allBannerHome.length,
            total_pages: Math.ceil(allBannerHome.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListAllBannerHomeService }