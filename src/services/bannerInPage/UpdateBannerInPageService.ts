import prismaClient from "../../prisma";

interface BannerInPageRequest {
  bannerInPage_id: any;
  bannerPage: string;
}

class UpdateBannerInPageService {
  async execute({ bannerInPage_id, bannerPage }: BannerInPageRequest) {
    const pageUpdate = await prismaClient.bannerInPage.update({
      where: {
        id: String(bannerInPage_id)
      },
      data: {
        bannerPage: bannerPage,
      }
    })

    return pageUpdate;

  }
}

export { UpdateBannerInPageService }