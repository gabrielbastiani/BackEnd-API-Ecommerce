import { StatusVariacao } from "@prisma/client";
import prismaClient from "../../prisma";

interface VariacaoRerquest {
  variacao_id: string;
}

class DisponibilidadeVariacaoService {
  async execute({ variacao_id }: VariacaoRerquest) {
    const active = await prismaClient.variacao.findUnique({
      where: {
        id: variacao_id
      },
      select: {
        disponibilidadeVariacao: true
      }
    })

    if(active.disponibilidadeVariacao === "Disponivel"){
      const isFalse = await prismaClient.variacao.update({
        where:{
          id: variacao_id
        },
        data: {
          disponibilidadeVariacao: StatusVariacao.Indisponivel
        }
      })

      return isFalse;
    }

    if(active.disponibilidadeVariacao === "Indisponivel"){
      const isTrue = await prismaClient.variacao.update({
        where:{
          id: variacao_id
        },
        data: {
          disponibilidadeVariacao: StatusVariacao.Disponivel
        }
      })

      return isTrue;

    }

  }
}

export { DisponibilidadeVariacaoService }