import prismaClient from '../../prisma';

class PageListAllBannerInPageService {
    async execute(page = 1, limit = 5) {

        const skip = limit * (page - 1);

        const allBannerInPage = await prismaClient.bannerInPage.findMany({
            orderBy: {
                created_at: 'desc'
            }
        });

        const bannerInPages = await prismaClient.bannerInPage.findMany({
            skip,
            take: limit,
            orderBy: {
                created_at: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            bannerInPages,
            total: allBannerInPage.length,
            total_pages: Math.ceil(allBannerInPage.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListAllBannerInPageService }