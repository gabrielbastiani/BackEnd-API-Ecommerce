import prismaClient from "../../prisma";

interface BannerMosaicoRequest {
  bannerMosaico: string;
  url: string;
}

class CreateBannerMosaicoService {
  async execute({ bannerMosaico, url }: BannerMosaicoRequest) {
    const mosaicoBanner = await prismaClient.bannerMosaico.create({
      data: {
        bannerMosaico: bannerMosaico,
        url: url
      }
    })

    return mosaicoBanner;

  }
}

export { CreateBannerMosaicoService }