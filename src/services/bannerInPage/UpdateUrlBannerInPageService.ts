import prismaClient from "../../prisma";

interface BannerInPageRequest {
  bannerInPage_id: any;
  url: string;
}

class UpdateUrlBannerInPageService {
  async execute({ bannerInPage_id, url }: BannerInPageRequest) {
    const updateUrl = await prismaClient.bannerInPage.update({
      where: {
        id: String(bannerInPage_id)
      },
      data: {
        url: url,
      }
    })

    return updateUrl;

  }
}

export { UpdateUrlBannerInPageService }