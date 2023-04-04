import { StatusSubCategory } from "@prisma/client";
import prismaClient from "../../../prisma";

interface SubCategoryRequest {
  subcategory_id: string;
}

class UpdateDisponibilidadeSubCategoryService {
  async execute({ subcategory_id }: SubCategoryRequest) {
    const active = await prismaClient.subCategory.findUnique({
      where: {
        id: subcategory_id
      },
      select: {
        disponibilidade: true
      }
    })

    if (active.disponibilidade === "Disponivel") {
      const isFalse = await prismaClient.subCategory.update({
        where: {
          id: subcategory_id
        },
        data: {
          disponibilidade: StatusSubCategory.Indisponivel
        }
      })

      return isFalse;
    }

    if (active.disponibilidade === "Indisponivel") {
      const isTrue = await prismaClient.subCategory.update({
        where: {
          id: subcategory_id
        },
        data: {
          disponibilidade: StatusSubCategory.Disponivel
        }
      })

      return isTrue;

    }

  }
}

export { UpdateDisponibilidadeSubCategoryService }