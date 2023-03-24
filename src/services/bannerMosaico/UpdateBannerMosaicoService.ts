import prismaClient from "../../prisma";

interface BannerMosaicoRequest {
  bannerMosaico_id: any;
  bannerMosaico: string;
}

class UpdateBannerMosaicoService {
  async execute({ bannerMosaico_id, bannerMosaico }: BannerMosaicoRequest) {
    const mosaicoBanners = await prismaClient.bannerMosaico.update({
      where: {
        id: String(bannerMosaico_id)
      },
      data: {
        bannerMosaico: bannerMosaico,
      }
    })

    return mosaicoBanners;

  }
}

export { UpdateBannerMosaicoService }