import { StatusVariation } from "@prisma/client";
import prismaClient from "../../prisma";

interface VariationRequest {
  variation_id: string;
}

class UpdateStatusVariationService {
  async execute({ variation_id }: VariationRequest) {
    const active = await prismaClient.variation.findUnique({
      where: {
        id: variation_id
      },
      select: {
        status: true
      }
    })

    if (active.status === "Disponivel") {
      const isFalse = await prismaClient.variation.update({
        where: {
          id: variation_id
        },
        data: {
          status: StatusVariation.Indisponivel
        }
      })

      return isFalse;
    }

    if (active.status === "Indisponivel") {
      const isTrue = await prismaClient.variation.update({
        where: {
          id: variation_id
        },
        data: {
          status: StatusVariation.Disponivel
        }
      })

      return isTrue;

    }

  }
}

export { UpdateStatusVariationService }