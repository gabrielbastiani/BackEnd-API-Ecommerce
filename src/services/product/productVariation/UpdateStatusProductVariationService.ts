import { StatusProductVariation } from "@prisma/client";
import prismaClient from "../../prisma";

interface VariationRequest {
  productVariation_id: string;
}

class UpdateStatusProductVariationService {
  async execute({ productVariation_id }: VariationRequest) {
    const active = await prismaClient.productVariation.findUnique({
      where: {
        id: productVariation_id
      },
      select: {
        status: true
      }
    })

    if (active.status === "Disponivel") {
      const isFalse = await prismaClient.productVariation.update({
        where: {
          id: productVariation_id
        },
        data: {
          status: StatusProductVariation.Indisponivel
        }
      })

      return isFalse;
    }

    if (active.status === "Indisponivel") {
      const isTrue = await prismaClient.productVariation.update({
        where: {
          id: productVariation_id
        },
        data: {
          status: StatusProductVariation.Disponivel
        }
      })

      return isTrue;

    }

  }
}

export { UpdateStatusProductVariationService }