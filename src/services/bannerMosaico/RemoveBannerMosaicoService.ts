import prismaClient from "../../prisma";

interface BannerMosaicoRequest {
  bannerMosaico_id: string;
}

class RemoveBannerMosaicoService {
  async execute({ bannerMosaico_id }: BannerMosaicoRequest) {
    const mosaicoBanners = await prismaClient.bannerMosaico.findUnique({
      where: {
        id: bannerMosaico_id
      }
    })

    return mosaicoBanners;

  }
}

export { RemoveBannerMosaicoService }