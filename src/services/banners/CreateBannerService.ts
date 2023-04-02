import prismaClient from "../../prisma";

interface BannerRequest {
  banner: string;
  url: string;
}

class CreateBannerService {
  async execute({ banner, url }: BannerRequest){
    const banners = await prismaClient.banner.create({
      data:{
        banner: banner,
        url: url
      }
    })

    return banners;

  }
}

export { CreateBannerService }