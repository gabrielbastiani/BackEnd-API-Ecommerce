import { StatusEmail } from "@prisma/client";
import prismaClient from "../../../prisma";

interface TemplateRequest {
  templateOrderEmail_id: string;
}

class UpdateStatusTemplateEmailService {
  async execute({ templateOrderEmail_id }: TemplateRequest) {
    const active = await prismaClient.templateOrderEmail.findUnique({
      where: {
        id: templateOrderEmail_id
      },
      select: {
        active: true
      }
    })

    if (active.active === "Sim") {
      const isFalse = await prismaClient.templateOrderEmail.update({
        where: {
          id: templateOrderEmail_id
        },
        data: {
          active: StatusEmail.Nao
        }
      })

      return isFalse;
    }

    if (active.active === "Nao") {
      const isTrue = await prismaClient.templateOrderEmail.update({
        where: {
          id: templateOrderEmail_id
        },
        data: {
          active: StatusEmail.Sim
        }
      })

      return isTrue;

    }

  }
}

export { UpdateStatusTemplateEmailService }