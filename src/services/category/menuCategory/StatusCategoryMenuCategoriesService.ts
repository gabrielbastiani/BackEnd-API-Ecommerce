import { StatusMenuCategory } from "@prisma/client";
import prismaClient from "../../../prisma";

interface MenuCategoryRequest {
  menuCategory_id: string;
}

class StatusCategoryMenuCategoriesService {
  async execute({ menuCategory_id }: MenuCategoryRequest) {
    const status = await prismaClient.menuCategory.findUnique({
      where: {
        id: menuCategory_id
      },
      select: {
        status: true
      }
    })

    if (status.status === "Disponivel") {
      const isFalse = await prismaClient.menuCategory.update({
        where: {
          id: menuCategory_id
        },
        data: {
          status: StatusMenuCategory.Indisponivel
        }
      })

      return isFalse;
    }

    if (status.status === "Indisponivel") {
      const isTrue = await prismaClient.menuCategory.update({
        where: {
          id: menuCategory_id
        },
        data: {
          status: StatusMenuCategory.Disponivel
        }
      })

      return isTrue;

    }

  }
}

export { StatusCategoryMenuCategoriesService }