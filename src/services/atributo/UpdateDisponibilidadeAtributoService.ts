import { StatusAtributo } from "@prisma/client";
import prismaClient from "../../prisma";

interface AtributoRequest {
  atributo_id: string;
}

class UpdateDisponibilidadeAtributoService {
  async execute({ atributo_id }: AtributoRequest) {
    const active = await prismaClient.atributo.findUnique({
      where: {
        id: atributo_id
      },
      select: {
        disponibilidade: true
      }
    })

    if(active.disponibilidade === "Disponivel"){
      const isFalse = await prismaClient.atributo.update({
        where:{
          id: atributo_id
        },
        data: {
          disponibilidade: StatusAtributo.Indisponivel
        }
      })

      return isFalse;
    }

    if(active.disponibilidade === "Indisponivel"){
      const isTrue = await prismaClient.atributo.update({
        where:{
          id: atributo_id
        },
        data: {
          disponibilidade: StatusAtributo.Disponivel
        }
      })

      return isTrue;

    }

  }
}

export { UpdateDisponibilidadeAtributoService }