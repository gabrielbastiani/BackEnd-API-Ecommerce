import { StatusOfertaVariacao } from '@prisma/client';
import prismaClient from "../../prisma";

interface VariacaoRequest {
  variacao_id: string;
}

class UpdateVariacaoOfertaService {
  async execute({ variacao_id }: VariacaoRequest) {
    const active = await prismaClient.variacao.findUnique({
      where: {
        id: variacao_id
      },
      select: {
        variacaoOferta: true
      }
    })

    if(active.variacaoOferta === "Sim"){
      const isFalse = await prismaClient.variacao.update({
        where:{
          id: variacao_id
        },
        data: {
          variacaoOferta: StatusOfertaVariacao.Nao
        }
      })

      return isFalse;
    }

    if(active.variacaoOferta === "Nao"){
      const isTrue = await prismaClient.variacao.update({
        where:{
          id: variacao_id
        },
        data: {
          variacaoOferta: StatusOfertaVariacao.Sim
        }
      })

      return isTrue;

    }

  }
}

export { UpdateVariacaoOfertaService }