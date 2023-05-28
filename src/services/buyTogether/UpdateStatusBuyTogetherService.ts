import { StatusBuyTogether } from "@prisma/client";
import prismaClient from "../../prisma";

interface BuyTogetherRequest {
  buyTogether_id: string;
}

class UpdateStatusBuyTogetherService {
  async execute({ buyTogether_id }: BuyTogetherRequest) {
    const active = await prismaClient.buyTogether.findUnique({
      where: {
        id: buyTogether_id
      },
      select: {
        status: true
      }
    })

    if (active.status === "Disponivel") {
      const isFalse = await prismaClient.buyTogether.update({
        where: {
          id: buyTogether_id
        },
        data: {
          status: StatusBuyTogether.Indisponivel
        }
      })

      return isFalse;
    }

    if (active.status === "Indisponivel") {
      const isTrue = await prismaClient.buyTogether.update({
        where: {
          id: buyTogether_id
        },
        data: {
          status: StatusBuyTogether.Disponivel
        }
      })

      return isTrue;

    }

  }
}

export { UpdateStatusBuyTogetherService }