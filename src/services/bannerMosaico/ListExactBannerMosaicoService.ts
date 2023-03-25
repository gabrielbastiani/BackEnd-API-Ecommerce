import prismaClient from '../../prisma';

class ListExactBannerMosaicoService {
    async execute({ bannerMosaico_id }) {
        const exactBanner = await prismaClient.bannerMosaico.findUnique({
            where: {
                id: String(bannerMosaico_id)
            }
        })
        return exactBanner;
    }
}

export { ListExactBannerMosaicoService }