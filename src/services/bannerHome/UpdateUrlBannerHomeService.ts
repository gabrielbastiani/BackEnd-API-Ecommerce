import prismaClient from "../../prisma";

interface BannerHomeRequest {
   bannerHome_id: any;
   url: string;
}

class UpdateUrlBannerHomeService {
  async execute({ bannerHome_id, url }: BannerHomeRequest){
    const updateUrl = await prismaClient.bannerHome.update({
      where:{
        id: String(bannerHome_id)
      },
      data:{
        url: url,
      }
    })

    return updateUrl;

  }
}

export { UpdateUrlBannerHomeService }