import { MainCategory } from "@prisma/client";
import prismaClient from "../../../prisma";


interface MainProductCategoryRequest {
  productCategory_id: string;
  product_id: string;
}

class MainCategoryProductService {
  async execute({ productCategory_id, product_id }: MainProductCategoryRequest) {

    const main = await prismaClient.productCategory.findUnique({
      where: {
        id: productCategory_id
      }
    });

    const productMainCategory = await prismaClient.productCategory.findMany({
      where: {
        product_id: product_id
      }
    });

    const idsRelat = productMainCategory.map((item) => item.mainCategory);

    const filtrado = idsRelat.filter(function (obj) { return "Sim" === obj });

    if (String(filtrado) === "Sim") {

      if (main.mainCategory === "Sim") {
        const isTrue = await prismaClient.productCategory.update({
          where: {
            id: productCategory_id
          },
          data: {
            mainCategory: MainCategory.Nao
          }
        });

        return isTrue;

      };

      throw new Error("Já existe uma categoria principal para esse produto.");

    }

    const active = await prismaClient.productCategory.findUnique({
      where: {
        id: productCategory_id
      },
      select: {
        mainCategory: true
      }
    });

    if (active.mainCategory === "Nao") {
      const isFalse = await prismaClient.productCategory.update({
        where: {
          id: productCategory_id
        },
        data: {
          mainCategory: MainCategory.Sim
        }
      });

      return isFalse;
    };

  }
}

export { MainCategoryProductService }