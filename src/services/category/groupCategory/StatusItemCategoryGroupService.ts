import { StatusGroup } from "@prisma/client";
import prismaClient from "../../../prisma";

interface GroupRequest {
  groupCategoy_id: string;
}

class StatusItemCategoryGroupService {
  async execute({ groupCategoy_id }: GroupRequest) {
    const status = await prismaClient.groupCategoy.findUnique({
      where: {
        id: groupCategoy_id
      },
      select: {
        status: true
      }
    })

    if (status.status === "Disponivel") {
      const isFalse = await prismaClient.groupCategoy.update({
        where: {
          id: groupCategoy_id
        },
        data: {
          status: StatusGroup.Indisponivel
        }
      })

      return isFalse;
    }

    if (status.status === "Indisponivel") {
      const isTrue = await prismaClient.groupCategoy.update({
        where: {
          id: groupCategoy_id
        },
        data: {
          status: StatusGroup.Disponivel
        }
      })

      return isTrue;

    }

  }
}

export { StatusItemCategoryGroupService }