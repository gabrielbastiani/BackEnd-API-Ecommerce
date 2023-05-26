import { StatusCategory } from "@prisma/client";
import prismaClient from "../../prisma";

interface CategoryRequest {
  category_id: string;
}

class UpdateStatusCategoryService {
  async execute({ category_id }: CategoryRequest) {
    const active = await prismaClient.category.findUnique({
      where: {
        id: category_id
      },
      select: {
        status: true
      }
    })

    if (active.status === "Disponivel") {
      const isFalse = await prismaClient.category.update({
        where: {
          id: category_id
        },
        data: {
          status: StatusCategory.Indisponivel
        }
      })

      return isFalse;
    }

    if (active.status === "Indisponivel") {
      const isTrue = await prismaClient.category.update({
        where: {
          id: category_id
        },
        data: {
          status: StatusCategory.Disponivel
        }
      })

      return isTrue;

    }

  }
}

export { UpdateStatusCategoryService }