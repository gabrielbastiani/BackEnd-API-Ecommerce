import { StatusBanner } from "@prisma/client";
import prismaClient from "../../prisma";

interface BannerRrequest {
  banner_id: string;
}

class StatusBannerService {
  async execute({ banner_id }: BannerRrequest) {

    const store = await prismaClient.store.findFirst();

    const active = await prismaClient.banner.findUnique({
      where: {
        id: banner_id
      },
      select: {
        active: true
      }
    });

    if (active.active === "Sim") {
      const isFalse = await prismaClient.banner.update({
        where: {
          id: banner_id
        },
        data: {
          active: StatusBanner.Nao
        }
      });

      const banner = await prismaClient.banner.findUnique({
        where: {
          id: banner_id
        }
      });

      await prismaClient.notificationAdmin.create({
        data: {
          message: `Banner <strong>${banner.title}</strong> foi <strong>DESATIVADO</strong> na loja.`,
          link: `http://localhost:3000/banner/${banner.id}`,
          store_id: store.id
        }
      });

      return isFalse;
    }

    if (active.active === "Nao") {
      const isTrue = await prismaClient.banner.update({
        where: {
          id: banner_id
        },
        data: {
          active: StatusBanner.Sim
        }
      });

      const banner = await prismaClient.banner.findUnique({
        where: {
          id: banner_id
        }
      });

      await prismaClient.notificationAdmin.create({
        data: {
          message: `Banner <strong>${banner.title}</strong> foi <strong>ATIVADO</strong> na loja.`,
          link: `http://localhost:3000/banner/${banner.id}`,
          store_id: store.id
        }
      });

      return isTrue;

    }

  }
}

export { StatusBannerService }