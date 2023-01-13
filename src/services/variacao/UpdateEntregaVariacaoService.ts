import prismaClient from "../../prisma";

interface VariacaoRequest {
  variacao_id: string;
}

class UpdateEntregaVariacaoService {
  async execute({ variacao_id }: VariacaoRequest) {
    const activeTrue = await prismaClient.variacao.findUnique({
      where: {
        id: variacao_id
      },
      select: {
        entregaGratisVariacao: true
      }
    })

    const activeFalse = await prismaClient.variacao.findUnique({
      where: {
        id: variacao_id
      },
      select: {
        entregaGratisVariacao: true
      }
    })

    if(activeTrue.entregaGratisVariacao === true){
      const isFalse = await prismaClient.variacao.update({
        where:{
          id: variacao_id
        },
        data: {
          entregaGratisVariacao: false
        }
      })

      return isFalse;
    }

    if(activeFalse.entregaGratisVariacao === false){
      const isTrue = await prismaClient.variacao.update({
        where:{
          id: variacao_id
        },
        data: {
          entregaGratisVariacao: true
        }
      })

      return isTrue;

    }

  }
}

export { UpdateEntregaVariacaoService }