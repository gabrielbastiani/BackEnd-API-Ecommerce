import { StatusRedeSocial } from "@prisma/client";
import prismaClient from "../../../prisma";

interface RequestLoja {
  textoinstitucional_id: string;
}

class UpdateDisponibilidadeTextoService {
  async execute({ textoinstitucional_id }: RequestLoja) {
    const active = await prismaClient.textoInstitucional.findUnique({
      where: {
        id: textoinstitucional_id
      },
      select: {
        disponibilidade: true
      }
    })

    if(active.disponibilidade === "Disponivel"){
      const isFalse = await prismaClient.textoInstitucional.update({
        where:{
          id: textoinstitucional_id
        },
        data: {
          disponibilidade: StatusRedeSocial.Indisponivel
        }
      })

      return isFalse;
    }

    if(active.disponibilidade === "Indisponivel"){
      const isTrue = await prismaClient.textoInstitucional.update({
        where:{
          id: textoinstitucional_id
        },
        data: {
          disponibilidade: StatusRedeSocial.Disponivel
        }
      })

      return isTrue;

    }

  }
}

export { UpdateDisponibilidadeTextoService }