import { StatusFilterCategory } from "@prisma/client";
import prismaClient from "../../../prisma";

interface FilterCategoryRequest {
  filterCategory_id: string;
}

class UpdateStatusFilterCategoryService {
  async execute({ filterCategory_id }: FilterCategoryRequest) {
    const status = await prismaClient.filterCategory.findUnique({
      where: {
        id: filterCategory_id
      },
      select: {
        status: true
      }
    })

    if (status.status === "Disponivel") {
      const isFalse = await prismaClient.filterCategory.update({
        where: {
          id: filterCategory_id
        },
        data: {
          status: StatusFilterCategory.Indisponivel
        }
      })

      return isFalse;
    }

    if (status.status === "Indisponivel") {
      const isTrue = await prismaClient.filterCategory.update({
        where: {
          id: filterCategory_id
        },
        data: {
          status: StatusFilterCategory.Disponivel
        }
      })

      return isTrue;

    }

  }
}

export { UpdateStatusFilterCategoryService }