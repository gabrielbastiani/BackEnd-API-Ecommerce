import prismaClient from "../../prisma";

interface BannerHomeRequest {
  bannerHome_id: string;
}

class RemoveBannerHomeService {
  async execute({ bannerHome_id }: BannerHomeRequest){
    const bannerHome = await prismaClient.bannerHome.findUnique({
      where:{
        id: bannerHome_id 
      }
    })

    return bannerHome;
    
  }
}

export { RemoveBannerHomeService }