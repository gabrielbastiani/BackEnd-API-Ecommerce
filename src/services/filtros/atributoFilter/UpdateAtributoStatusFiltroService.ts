import { StatusFilterAtributo } from "@prisma/client";
import prismaClient from "../../../prisma";

interface FiltroAtributoRequest {
  filterAtributo_id: string;
}

class UpdateAtributoStatusFiltroService {
  async execute({ filterAtributo_id }: FiltroAtributoRequest) {
    const status = await prismaClient.filterAtributo.findUnique({
      where: {
        id: filterAtributo_id
      },
      select: {
        status: true
      }
    })

    if (status.status === "Ativo") {
      const isFalse = await prismaClient.filterAtributo.update({
        where: {
          id: filterAtributo_id
        },
        data: {
          status: StatusFilterAtributo.Inativo
        }
      })

      return isFalse;
    }

    if (status.status === "Inativo") {
      const isTrue = await prismaClient.filterAtributo.update({
        where: {
          id: filterAtributo_id
        },
        data: {
          status: StatusFilterAtributo.Ativo
        }
      })

      return isTrue;

    }

  }
}

export { UpdateAtributoStatusFiltroService }