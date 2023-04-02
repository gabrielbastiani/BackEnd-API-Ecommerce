import prismaClient from "../../prisma";

interface BannerRequest {
   banner_id: any;
   url: string;
}

class UpdateUrlBannerService {
  async execute({ banner_id, url }: BannerRequest){
    const updateUrl = await prismaClient.banner.update({
      where:{
        id: String(banner_id)
      },
      data:{
        url: url,
      }
    })

    return updateUrl;

  }
}

export { UpdateUrlBannerService }