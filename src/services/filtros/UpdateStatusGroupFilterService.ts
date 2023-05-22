import { StatusGroupFilter } from "@prisma/client";
import prismaClient from "../../prisma";

interface GroupRequest {
  groupFilter_id: string;
}

class UpdateStatusGroupFilterService {
  async execute({ groupFilter_id }: GroupRequest) {
    const status = await prismaClient.groupFilter.findUnique({
      where: {
        id: groupFilter_id
      },
      select: {
        status: true
      }
    })

    if (status.status === "Disponivel") {
      const isFalse = await prismaClient.groupFilter.update({
        where: {
          id: groupFilter_id
        },
        data: {
          status: StatusGroupFilter.Indisponivel
        }
      })

      return isFalse;
    }

    if (status.status === "Indisponivel") {
      const isTrue = await prismaClient.groupFilter.update({
        where: {
          id: groupFilter_id
        },
        data: {
          status: StatusGroupFilter.Disponivel
        }
      })

      return isTrue;

    }

  }
}

export { UpdateStatusGroupFilterService }