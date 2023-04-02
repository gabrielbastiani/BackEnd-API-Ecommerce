import { StatusBanner } from "@prisma/client";
import prismaClient from "../../prisma";

interface BannerRrequest {
  banner_id: string;
}

class StatusBannerService {
  async execute({ banner_id }: BannerRrequest) {
    const active = await prismaClient.banner.findUnique({
      where: {
        id: banner_id
      },
      select: {
        active: true
      }
    })

    if(active.active === "Sim"){
      const isFalse = await prismaClient.banner.update({
        where:{
          id: banner_id
        },
        data: {
          active: StatusBanner.Nao
        }
      })

      return isFalse;
    }

    if(active.active === "Nao"){
      const isTrue = await prismaClient.banner.update({
        where:{
          id: banner_id
        },
        data: {
          active: StatusBanner.Sim
        }
      })

      return isTrue;

    }

  }
}

export { StatusBannerService }