import { StatusDescriptionProduct } from "@prisma/client";
import prismaClient from "../../../prisma";

interface DescriptionRequest {
  descriptionProduct_id: string;
}

class UpdateStatusDescriptionProductService {
  async execute({ descriptionProduct_id }: DescriptionRequest) {
    const active = await prismaClient.descriptionProduct.findUnique({
      where: {
        id: descriptionProduct_id
      },
      select: {
        status: true
      }
    })

    if (active.status === "Disponivel") {
      const isFalse = await prismaClient.descriptionProduct.update({
        where: {
          id: descriptionProduct_id
        },
        data: {
          status: StatusDescriptionProduct.Indisponivel
        }
      })

      return isFalse;
    }

    if (active.status === "Indisponivel") {
      const isTrue = await prismaClient.descriptionProduct.update({
        where: {
          id: descriptionProduct_id
        },
        data: {
          status: StatusDescriptionProduct.Disponivel
        }
      })

      return isTrue;

    }

  }
}

export { UpdateStatusDescriptionProductService }