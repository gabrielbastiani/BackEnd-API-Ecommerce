import prismaClient from "../../prisma";

interface BannerHomeRequest {
  banner: string;
  url: string;
}

class CreateBannerHomeService {
  async execute({ banner, url }: BannerHomeRequest){
    const homeBanner = await prismaClient.bannerHome.create({
      data:{
        banner: banner,
        url: url
      }
    })

    return homeBanner;

  }
}

export { CreateBannerHomeService }