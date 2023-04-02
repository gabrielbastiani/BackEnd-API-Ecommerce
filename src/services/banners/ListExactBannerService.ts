import prismaClient from '../../prisma';

class ListExactBannerService {
    async execute({ banner_id }) {
        const exactBanner = await prismaClient.banner.findUnique({
            where: {
                id: String(banner_id)
            }
        })
        return exactBanner;
    }
}

export { ListExactBannerService }