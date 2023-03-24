import { StatusBannerPage } from '@prisma/client';
import prismaClient from "../../prisma";

interface BannerInPageRequest {
  bannerInPage_id: string;
}

class StatusBannerInPageService {
  async execute({ bannerInPage_id }: BannerInPageRequest) {
    const active = await prismaClient.bannerInPage.findUnique({
      where: {
        id: bannerInPage_id
      },
      select: {
        active: true
      }
    })

    if (active.active === "Sim") {
      const isFalse = await prismaClient.bannerInPage.update({
        where: {
          id: bannerInPage_id
        },
        data: {
          active: StatusBannerPage.Nao
        }
      })

      return isFalse;
    }

    if (active.active === "Nao") {
      const isTrue = await prismaClient.bannerInPage.update({
        where: {
          id: bannerInPage_id
        },
        data: {
          active: StatusBannerPage.Sim
        }
      })

      return isTrue;

    }

  }
}

export { StatusBannerInPageService }