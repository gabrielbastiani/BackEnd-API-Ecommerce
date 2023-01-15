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
        freteGratis: true
      }
    })

    const activeFalse = await prismaClient.variacao.findUnique({
      where: {
        id: variacao_id
      },
      select: {
        freteGratis: true
      }
    })

    if(activeTrue.freteGratis === true){
      const isFalse = await prismaClient.variacao.update({
        where:{
          id: variacao_id
        },
        data: {
          freteGratis: false
        }
      })

      return isFalse;
    }

    if(activeFalse.freteGratis === false){
      const isTrue = await prismaClient.variacao.update({
        where:{
          id: variacao_id
        },
        data: {
          freteGratis: true
        }
      })

      return isTrue;

    }

  }
}

export { UpdateEntregaVariacaoService }