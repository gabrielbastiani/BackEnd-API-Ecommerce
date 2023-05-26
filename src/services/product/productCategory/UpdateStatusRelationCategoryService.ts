import { StatusRelation } from "@prisma/client";
import prismaClient from "../../../prisma";


interface CategoryRequest {
  relationProductCategory_id: string;
}

class UpdateStatusRelationCategoryService {
  async execute({ relationProductCategory_id }: CategoryRequest) {
    const active = await prismaClient.productCategory.findUnique({
      where: {
        id: relationProductCategory_id
      },
      select: {
        status: true
      }
    })

    if (active.status === "Indisponivel") {
      const isFalse = await prismaClient.productCategory.update({
        where: {
          id: relationProductCategory_id
        },
        data: {
          status: StatusRelation.Disponivel
        }
      })

      return isFalse;
    }

    if (active.status === "Disponivel") {
      const isTrue = await prismaClient.productCategory.update({
        where: {
          id: relationProductCategory_id
        },
        data: {
          status: StatusRelation.Indisponivel
        }
      })

      return isTrue;

    }

  }
}

export { UpdateStatusRelationCategoryService }