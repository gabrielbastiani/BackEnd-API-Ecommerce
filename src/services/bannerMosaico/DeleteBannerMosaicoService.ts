import prismaClient from "../../prisma";

interface BannerMosaicoRequest {
    bannerMosaico_id: string;
}

class DeleteBannerMosaicoService {
    async execute({ bannerMosaico_id }: BannerMosaicoRequest) {
        const mosaicoBanner = await prismaClient.bannerMosaico.delete({
            where: {
                id: bannerMosaico_id
            }
        })

        return mosaicoBanner;
    }

}

export { DeleteBannerMosaicoService }