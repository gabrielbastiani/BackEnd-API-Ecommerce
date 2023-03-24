import { StatusDestaqueVariacao } from '@prisma/client';
import prismaClient from "../../prisma";

interface VariacaoRequest {
  variacao_id: string;
}

class UpdateVariacaoDestaqueService {
  async execute({ variacao_id }: VariacaoRequest) {
    const active = await prismaClient.variacao.findUnique({
      where: {
        id: variacao_id
      },
      select: {
        variacaoDestaque: true
      }
    })

    if(active.variacaoDestaque === "Sim"){
      const isFalse = await prismaClient.variacao.update({
        where:{
          id: variacao_id
        },
        data: {
          variacaoDestaque: StatusDestaqueVariacao.Nao
        }
      })

      return isFalse;
    }

    if(active.variacaoDestaque === "Nao"){
      const isTrue = await prismaClient.variacao.update({
        where:{
          id: variacao_id
        },
        data: {
          variacaoDestaque: StatusDestaqueVariacao.Sim
        }
      })

      return isTrue;

    }

  }
}

export { UpdateVariacaoDestaqueService }