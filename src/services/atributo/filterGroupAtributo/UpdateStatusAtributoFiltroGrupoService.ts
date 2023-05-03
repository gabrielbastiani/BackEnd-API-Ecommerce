import { StatusGroupAtributos } from "@prisma/client";
import prismaClient from "../../../prisma";


interface CategoryRequest {
  groupFilterAtributo_id: string;
}

class UpdateStatusAtributoFiltroGrupoService {
  async execute({ groupFilterAtributo_id }: CategoryRequest) {
    const active = await prismaClient.groupFilterAtributo.findUnique({
      where: {
        id: groupFilterAtributo_id
      },
      select: {
        status: true
      }
    })

    if (active.status === "Inativo") {
      const isFalse = await prismaClient.groupFilterAtributo.update({
        where: {
          id: groupFilterAtributo_id
        },
        data: {
          status: StatusGroupAtributos.Ativo
        }
      })

      return isFalse;
    }

    if (active.status === "Ativo") {
      const isTrue = await prismaClient.groupFilterAtributo.update({
        where: {
          id: groupFilterAtributo_id
        },
        data: {
          status: StatusGroupAtributos.Inativo
        }
      })

      return isTrue;

    }

  }
}

export { UpdateStatusAtributoFiltroGrupoService }