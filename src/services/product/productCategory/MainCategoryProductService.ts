import { MainCategory } from "@prisma/client";
import prismaClient from "../../../prisma";


interface MainProductCategoryRequest {
  productCategory_id: string;
}

class MainCategoryProductService {
  async execute({ productCategory_id }: MainProductCategoryRequest) {
    const active = await prismaClient.productCategory.findUnique({
      where: {
        id: productCategory_id
      },
      select: {
        mainCategory: true
      }
    })

    if (active.mainCategory === "Nao") {
      const isFalse = await prismaClient.productCategory.update({
        where: {
          id: productCategory_id
        },
        data: {
          mainCategory: MainCategory.Sim
        }
      })

      return isFalse;
    }

    if (active.mainCategory === "Sim") {
      const isTrue = await prismaClient.productCategory.update({
        where: {
          id: productCategory_id
        },
        data: {
          mainCategory: MainCategory.Nao
        }
      })

      return isTrue;

    }

  }
}

export { MainCategoryProductService }