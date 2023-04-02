import prismaClient from "../../prisma";

interface BannerRequest {
   banner_id: any;
   banner: string;
}

class UpdateBannerService {
  async execute({ banner_id, banner }: BannerRequest){
    const updatePhoto = await prismaClient.banner.update({
      where:{
        id: String(banner_id)
      },
      data:{
        banner: banner,
      }
    })

    return updatePhoto;

  }
}

export { UpdateBannerService }