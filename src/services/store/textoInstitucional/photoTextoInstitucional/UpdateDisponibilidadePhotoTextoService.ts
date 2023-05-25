import { StatusImagemLoja } from "@prisma/client";
import prismaClient from "../../../../prisma";

interface RequestLoja {
  imageloja_id: string;
}

class UpdateDisponibilidadePhotoTextoService {
  async execute({ imageloja_id }: RequestLoja) {
    const active = await prismaClient.imageLoja.findUnique({
      where: {
        id: imageloja_id
      },
      select: {
        disponibilidade: true
      }
    })

    if(active.disponibilidade === "Disponivel"){
      const isFalse = await prismaClient.imageLoja.update({
        where:{
          id: imageloja_id
        },
        data: {
          disponibilidade: StatusImagemLoja.Indisponivel
        }
      })

      return isFalse;
    }

    if(active.disponibilidade === "Indisponivel"){
      const isTrue = await prismaClient.imageLoja.update({
        where:{
          id: imageloja_id
        },
        data: {
          disponibilidade: StatusImagemLoja.Disponivel
        }
      })

      return isTrue;

    }

  }
}

export { UpdateDisponibilidadePhotoTextoService }