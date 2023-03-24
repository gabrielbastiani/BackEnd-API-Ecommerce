import prismaClient from "../../prisma";

interface BannerInPagerequest {
  bannerPage: string;
  url: string;
}

class CreateBannerInPageService {
  async execute({ bannerPage, url }: BannerInPagerequest) {
    const bannerPages = await prismaClient.bannerInPage.create({
      data: {
        bannerPage: bannerPage,
        url: url
      }
    })

    return bannerPages;

  }
}

export { CreateBannerInPageService }