
import { StatusImageStore } from "@prisma/client";
import prismaClient from "../../../prisma";

interface ImageRequest {
  imageStore_id: string;
}

class UpdateStatusImageStoreService {
  async execute({ imageStore_id }: ImageRequest) {
    const active = await prismaClient.imageStore.findUnique({
      where: {
        id: imageStore_id
      },
      select: {
        status: true
      }
    })

    if (active.status === "Disponivel") {
      const isFalse = await prismaClient.imageStore.update({
        where: {
          id: imageStore_id
        },
        data: {
          status: StatusImageStore.Indisponivel
        }
      })

      return isFalse;
    }

    if (active.status === "Indisponivel") {
      const isTrue = await prismaClient.imageStore.update({
        where: {
          id: imageStore_id
        },
        data: {
          status: StatusImageStore.Disponivel
        }
      })

      return isTrue;

    }

  }
}

export { UpdateStatusImageStoreService }