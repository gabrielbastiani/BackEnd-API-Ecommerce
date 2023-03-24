import prismaClient from "../../prisma";

interface BannerHomeRequest {
   bannerHome_id: any;
   banner: string;
}

class UpdateBannerHomeService {
  async execute({ bannerHome_id, banner }: BannerHomeRequest){
    const updatePhoto = await prismaClient.bannerHome.update({
      where:{
        id: String(bannerHome_id)
      },
      data:{
        banner: banner,
      }
    })

    return updatePhoto;

  }
}

export { UpdateBannerHomeService }