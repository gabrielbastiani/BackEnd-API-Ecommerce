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

    if (status.status === "Disponivel") {
      const isFalse = await prismaClient.filterAtributo.update({
        where: {
          id: filterAtributo_id
        },
        data: {
          status: StatusFilterAtributo.Indisponivel
        }
      })

      return isFalse;
    }

    if (status.status === "Indisponivel") {
      const isTrue = await prismaClient.filterAtributo.update({
        where: {
          id: filterAtributo_id
        },
        data: {
          status: StatusFilterAtributo.Disponivel
        }
      })

      return isTrue;

    }

  }
}

export { UpdateAtributoStatusFiltroService }