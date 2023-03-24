import { StatusBannerHome } from "@prisma/client";
import prismaClient from "../../prisma";

interface BannerHomeRrequest {
  bannerHome_id: string;
}

class StatusBannerHomeService {
  async execute({ bannerHome_id }: BannerHomeRrequest) {
    const active = await prismaClient.bannerHome.findUnique({
      where: {
        id: bannerHome_id
      },
      select: {
        active: true
      }
    })

    if(active.active === "Sim"){
      const isFalse = await prismaClient.bannerHome.update({
        where:{
          id: bannerHome_id
        },
        data: {
          active: StatusBannerHome.Nao
        }
      })

      return isFalse;
    }

    if(active.active === "Nao"){
      const isTrue = await prismaClient.bannerHome.update({
        where:{
          id: bannerHome_id
        },
        data: {
          active: StatusBannerHome.Sim
        }
      })

      return isTrue;

    }

  }
}

export { StatusBannerHomeService }