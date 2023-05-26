import { StatusProductCategory } from "@prisma/client";
import prismaClient from "../../../prisma";


interface ProductCategoryRequest {
  productCategory_id: string;
}

class UpdateStatusRelationCategoryService {
  async execute({ productCategory_id }: ProductCategoryRequest) {
    const active = await prismaClient.productCategory.findUnique({
      where: {
        id: productCategory_id
      },
      select: {
        status: true
      }
    })

    if (active.status === "Indisponivel") {
      const isFalse = await prismaClient.productCategory.update({
        where: {
          id: productCategory_id
        },
        data: {
          status: StatusProductCategory.Disponivel
        }
      })

      return isFalse;
    }

    if (active.status === "Disponivel") {
      const isTrue = await prismaClient.productCategory.update({
        where: {
          id: productCategory_id
        },
        data: {
          status: StatusProductCategory.Indisponivel
        }
      })

      return isTrue;

    }

  }
}

export { UpdateStatusRelationCategoryService }