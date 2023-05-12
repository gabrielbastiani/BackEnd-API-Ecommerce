import { StatusFilterCategory } from "@prisma/client";
import prismaClient from "../../../prisma";

interface FiltroCategoryRequest {
  filterCategory_id: string;
}

class UpdateCategoryStatusFiltroService {
  async execute({ filterCategory_id }: FiltroCategoryRequest) {
    const status = await prismaClient.filterCategory.findUnique({
      where: {
        id: filterCategory_id
      },
      select: {
        status: true
      }
    })

    if (status.status === "Ativo") {
      const isFalse = await prismaClient.filterCategory.update({
        where: {
          id: filterCategory_id
        },
        data: {
          status: StatusFilterCategory.Inativo
        }
      })

      return isFalse;
    }

    if (status.status === "Inativo") {
      const isTrue = await prismaClient.filterCategory.update({
        where: {
          id: filterCategory_id
        },
        data: {
          status: StatusFilterCategory.Ativo
        }
      })

      return isTrue;

    }

  }
}

export { UpdateCategoryStatusFiltroService }