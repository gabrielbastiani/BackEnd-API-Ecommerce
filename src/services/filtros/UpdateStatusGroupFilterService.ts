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

    if (status.status === "Ativo") {
      const isFalse = await prismaClient.groupFilter.update({
        where: {
          id: groupFilter_id
        },
        data: {
          status: StatusGroupFilter.Inativo
        }
      })

      return isFalse;
    }

    if (status.status === "Inativo") {
      const isTrue = await prismaClient.groupFilter.update({
        where: {
          id: groupFilter_id
        },
        data: {
          status: StatusGroupFilter.Ativo
        }
      })

      return isTrue;

    }

  }
}

export { UpdateStatusGroupFilterService }