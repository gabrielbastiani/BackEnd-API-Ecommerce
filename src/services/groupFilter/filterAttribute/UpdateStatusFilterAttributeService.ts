import { StatusFilterAttribute } from "@prisma/client";
import prismaClient from "../../../prisma";

interface FilterAttributeRequest {
  filterAttribute_id: string;
}

class UpdateStatusFilterAttributeService {
  async execute({ filterAttribute_id }: FilterAttributeRequest) {
    const status = await prismaClient.filterAttribute.findUnique({
      where: {
        id: filterAttribute_id
      },
      select: {
        status: true
      }
    })

    if (status.status === "Disponivel") {
      const isFalse = await prismaClient.filterAttribute.update({
        where: {
          id: filterAttribute_id
        },
        data: {
          status: StatusFilterAttribute.Indisponivel
        }
      })

      return isFalse;
    }

    if (status.status === "Indisponivel") {
      const isTrue = await prismaClient.filterAttribute.update({
        where: {
          id: filterAttribute_id
        },
        data: {
          status: StatusFilterAttribute.Disponivel
        }
      })

      return isTrue;

    }

  }
}

export { UpdateStatusFilterAttributeService }