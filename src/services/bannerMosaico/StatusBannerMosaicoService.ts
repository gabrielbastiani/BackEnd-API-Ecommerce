import { StatusBannerMosaico } from "@prisma/client";
import prismaClient from "../../prisma";

interface BannerMosaicoRequest {
  bannerMosaico_id: string;
}

class StatusBannerMosaicoService {
  async execute({ bannerMosaico_id }: BannerMosaicoRequest) {
    const active = await prismaClient.bannerMosaico.findUnique({
      where: {
        id: bannerMosaico_id
      },
      select: {
        active: true
      }
    })

    if (active.active === "Sim") {
      const isFalse = await prismaClient.bannerMosaico.update({
        where: {
          id: bannerMosaico_id
        },
        data: {
          active: StatusBannerMosaico.Nao
        }
      })

      return isFalse;
    }

    if (active.active === "Nao") {
      const isTrue = await prismaClient.bannerMosaico.update({
        where: {
          id: bannerMosaico_id
        },
        data: {
          active: StatusBannerMosaico.Sim
        }
      })

      return isTrue;

    }

  }
}

export { StatusBannerMosaicoService }