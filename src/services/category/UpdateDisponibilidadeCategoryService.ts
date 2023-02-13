import { StatusCategory } from "@prisma/client";
import prismaClient from "../../prisma";

interface CategoryRequest {
  category_id: string;
}

class UpdateDisponibilidadeCategoryService {
  async execute({ category_id }: CategoryRequest) {
    const active = await prismaClient.category.findUnique({
      where: {
        id: category_id
      },
      select: {
        disponibilidade: true
      }
    })

    if(active.disponibilidade === "Disponivel"){
      const isFalse = await prismaClient.category.update({
        where:{
          id: category_id
        },
        data: {
          disponibilidade: StatusCategory.Indisponivel
        }
      })

      return isFalse;
    }

    if(active.disponibilidade === "Indisponivel"){
      const isTrue = await prismaClient.category.update({
        where:{
          id: category_id
        },
        data: {
          disponibilidade: StatusCategory.Disponivel
        }
      })

      return isTrue;

    }

  }
}

export { UpdateDisponibilidadeCategoryService }