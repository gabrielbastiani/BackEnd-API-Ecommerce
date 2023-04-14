import { StatusRelation } from "@prisma/client";
import prismaClient from "../../prisma";


interface CategoryRequest {
  relationProductCategory_id: string;
}

class UpdateStatusRelationCategoryService {
  async execute({ relationProductCategory_id }: CategoryRequest) {
    const active = await prismaClient.relationProductCategory.findUnique({
      where: {
        id: relationProductCategory_id
      },
      select: {
        status: true
      }
    })

    console.log(active.status)

    if (active.status === "Inativo") {
      const isFalse = await prismaClient.relationProductCategory.update({
        where: {
          id: relationProductCategory_id
        },
        data: {
          status: StatusRelation.Ativo
        }
      })

      return isFalse;
    }

    if (active.status === "Ativo") {
      const isTrue = await prismaClient.relationProductCategory.update({
        where: {
          id: relationProductCategory_id
        },
        data: {
          status: StatusRelation.Inativo
        }
      })

      return isTrue;

    }

  }
}

export { UpdateStatusRelationCategoryService }