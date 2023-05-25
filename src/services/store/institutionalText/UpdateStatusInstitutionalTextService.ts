import { StatusInstitutionalText } from "@prisma/client";
import prismaClient from "../../../prisma";

interface TextRequest {
  institutionalText_id: string;
}

class UpdateStatusInstitutionalTextService {
  async execute({ institutionalText_id }: TextRequest) {
    const active = await prismaClient.institutionalText.findUnique({
      where: {
        id: institutionalText_id
      },
      select: {
        status: true
      }
    })

    if (active.status === "Disponivel") {
      const isFalse = await prismaClient.institutionalText.update({
        where: {
          id: institutionalText_id
        },
        data: {
          status: StatusInstitutionalText.Indisponivel
        }
      })

      return isFalse;
    }

    if (active.status === "Indisponivel") {
      const isTrue = await prismaClient.institutionalText.update({
        where: {
          id: institutionalText_id
        },
        data: {
          status: StatusInstitutionalText.Disponivel
        }
      })

      return isTrue;

    }

  }
}

export { UpdateStatusInstitutionalTextService }