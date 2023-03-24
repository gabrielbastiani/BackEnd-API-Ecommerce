import prismaClient from "../../prisma";

interface BannerInPageRequest {
  bannerInPage_id: string;
}

class RemoveBannerInPageService {
  async execute({ bannerInPage_id }: BannerInPageRequest) {
    const pageBanner = await prismaClient.bannerInPage.findUnique({
      where: {
        id: bannerInPage_id
      }
    })

    return pageBanner;

  }
}

export { RemoveBannerInPageService }