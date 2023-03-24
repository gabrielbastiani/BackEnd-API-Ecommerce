import prismaClient from '../../prisma';

class PageListAllBannerMosaicoService {
    async execute(page = 1, limit = 5) {

        const skip = limit * (page - 1);

        const allBannersMosaico = await prismaClient.bannerMosaico.findMany({
            orderBy: {
                created_at: 'desc'
            }
        });

        const bannersMosaico = await prismaClient.bannerMosaico.findMany({
            skip,
            take: limit,
            orderBy: {
                created_at: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            bannersMosaico,
            total: allBannersMosaico.length,
            total_pages: Math.ceil(allBannersMosaico.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListAllBannerMosaicoService }