import { StatusEmail } from "@prisma/client";
import prismaClient from "../../../prisma";

interface TemplateRequest {
  templateFreteEmail_id: string;
}

class UpdateStatusTemplateEmailFreteService {
  async execute({ templateFreteEmail_id }: TemplateRequest) {
    const active = await prismaClient.templateFreteEmail.findUnique({
      where: {
        id: templateFreteEmail_id
      },
      select: {
        active: true
      }
    })

    if (active.active === "Sim") {
      const isFalse = await prismaClient.templateFreteEmail.update({
        where: {
          id: templateFreteEmail_id
        },
        data: {
          active: StatusEmail.Nao
        }
      })

      return isFalse;
    }

    if (active.active === "Nao") {
      const isTrue = await prismaClient.templateFreteEmail.update({
        where: {
          id: templateFreteEmail_id
        },
        data: {
          active: StatusEmail.Sim
        }
      })

      return isTrue;

    }

  }
}

export { UpdateStatusTemplateEmailFreteService }