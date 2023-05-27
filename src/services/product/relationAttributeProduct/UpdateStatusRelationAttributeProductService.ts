import { StatusRelationAttributeProduct } from "@prisma/client";
import prismaClient from "../../../prisma";

interface RelationAttributeProductRequest {
  relationAttributeProduct_id: string;
}

class UpdateStatusRelationAttributeProductService {
  async execute({ relationAttributeProduct_id }: RelationAttributeProductRequest) {
    const active = await prismaClient.relationAttributeProduct.findUnique({
      where: {
        id: relationAttributeProduct_id
      },
      select: {
        status: true
      }
    })

    if (active.status === "Disponivel") {
      const isFalse = await prismaClient.relationAttributeProduct.update({
        where: {
          id: relationAttributeProduct_id
        },
        data: {
          status: StatusRelationAttributeProduct.Indisponivel
        }
      })

      return isFalse;
    }

    if (active.status === "Indisponivel") {
      const isTrue = await prismaClient.relationAttributeProduct.update({
        where: {
          id: relationAttributeProduct_id
        },
        data: {
          status: StatusRelationAttributeProduct.Disponivel
        }
      })

      return isTrue;

    }

  }
}

export { UpdateStatusRelationAttributeProductService }