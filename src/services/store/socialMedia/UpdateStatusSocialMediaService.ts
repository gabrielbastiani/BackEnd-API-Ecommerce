import { StatusSocialMedia } from "@prisma/client";
import prismaClient from "../../../prisma";

interface RequestLoja {
  socialMedia_id: string;
}

class UpdateStatusSocialMediaService {
  async execute({ socialMedia_id }: RequestLoja) {
    const active = await prismaClient.socialMedia.findUnique({
      where: {
        id: socialMedia_id
      },
      select: {
        status: true
      }
    })

    if (active.status === "Disponivel") {
      const isFalse = await prismaClient.socialMedia.update({
        where: {
          id: socialMedia_id
        },
        data: {
          status: StatusSocialMedia.Indisponivel
        }
      })

      return isFalse;
    }

    if (active.status === "Indisponivel") {
      const isTrue = await prismaClient.socialMedia.update({
        where: {
          id: socialMedia_id
        },
        data: {
          status: StatusSocialMedia.Disponivel
        }
      })

      return isTrue;

    }

  }
}

export { UpdateStatusSocialMediaService }