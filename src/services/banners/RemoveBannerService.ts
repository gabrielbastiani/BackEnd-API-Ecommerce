import prismaClient from "../../prisma";

interface BannerRequest {
  banner_id: string;
}

class RemoveBannerService {
  async execute({ banner_id }: BannerRequest){
    const banners = await prismaClient.banner.findUnique({
      where:{
        id: banner_id 
      }
    })

    return banners;
    
  }
}

export { RemoveBannerService }