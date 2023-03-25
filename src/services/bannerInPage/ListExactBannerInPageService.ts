import prismaClient from '../../prisma';

class ListExactBannerInPageService {
    async execute({ bannerInPage_id }) {
        const exactBanner = await prismaClient.bannerInPage.findUnique({
            where: {
                id: String(bannerInPage_id)
            }
        })
        return exactBanner;
    }
}

export { ListExactBannerInPageService }