import prismaClient from "../../prisma";

interface BannerMosaicoRequest {
  bannerMosaico_id: any;
  url: string;
}

class UpdateUrlBannerMosaicoService {
  async execute({ bannerMosaico_id, url }: BannerMosaicoRequest) {
    const updateUrl = await prismaClient.bannerMosaico.update({
      where: {
        id: String(bannerMosaico_id)
      },
      data: {
        url: url,
      }
    })

    return updateUrl;

  }
}

export { UpdateUrlBannerMosaicoService }