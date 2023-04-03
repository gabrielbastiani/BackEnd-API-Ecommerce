import { StatusRedeSocial } from "@prisma/client";
import prismaClient from "../../../prisma";

interface RequestLoja {
  redesocial_id: string;
}

class UpdateDisponibilidadeRedeSocialService {
  async execute({ redesocial_id }: RequestLoja) {
    const active = await prismaClient.redeSocial.findUnique({
      where: {
        id: redesocial_id
      },
      select: {
        disponibilidade: true
      }
    })

    if(active.disponibilidade === "Disponivel"){
      const isFalse = await prismaClient.redeSocial.update({
        where:{
          id: redesocial_id
        },
        data: {
          disponibilidade: StatusRedeSocial.Indisponivel
        }
      })

      return isFalse;
    }

    if(active.disponibilidade === "Indisponivel"){
      const isTrue = await prismaClient.redeSocial.update({
        where:{
          id: redesocial_id
        },
        data: {
          disponibilidade: StatusRedeSocial.Disponivel
        }
      })

      return isTrue;

    }

  }
}

export { UpdateDisponibilidadeRedeSocialService }