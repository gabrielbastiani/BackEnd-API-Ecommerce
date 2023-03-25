import prismaClient from '../../prisma';

class ListExactBannerHomeService {
    async execute({ bannerHome_id }) {
        const exactBanner = await prismaClient.bannerHome.findUnique({
            where: {
                id: String(bannerHome_id)
            }
        })
        return exactBanner;
    }
}

export { ListExactBannerHomeService }