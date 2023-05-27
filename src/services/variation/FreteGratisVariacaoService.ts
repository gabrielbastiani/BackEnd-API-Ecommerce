import { StatusFrete } from "@prisma/client";
import prismaClient from "../../prisma";

interface VariacaoRerquest {
  variacao_id: string;
}

class FreteGratisVariacaoService {
  async execute({ variacao_id }: VariacaoRerquest) {
    const active = await prismaClient.variacao.findUnique({
      where: {
        id: variacao_id
      },
      select: {
        freteGratis: true
      }
    })

    if(active.freteGratis === "Sim"){
      const isFalse = await prismaClient.variacao.update({
        where:{
          id: variacao_id
        },
        data: {
          freteGratis: StatusFrete.Nao
        }
      })

      return isFalse;
    }

    if(active.freteGratis === "Nao"){
      const isTrue = await prismaClient.variacao.update({
        where:{
          id: variacao_id
        },
        data: {
          freteGratis: StatusFrete.Sim
        }
      })

      return isTrue;

    }

  }
}

export { FreteGratisVariacaoService }