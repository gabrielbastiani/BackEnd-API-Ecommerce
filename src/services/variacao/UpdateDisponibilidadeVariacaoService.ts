import prismaClient from "../../prisma";

interface VariacaoRequest {
  variacao_id: string;
}

class UpdateDisponibilidadeVariacaoService {
  async execute({ variacao_id }: VariacaoRequest) {
    const activeTrue = await prismaClient.variacao.findUnique({
      where: {
        id: variacao_id
      },
      select: {
        disponibilidadeVariacao: true
      }
    })

    const activeFalse = await prismaClient.variacao.findUnique({
      where: {
        id: variacao_id
      },
      select: {
        disponibilidadeVariacao: true
      }
    })

    if(activeTrue.disponibilidadeVariacao === true){
      const isFalse = await prismaClient.variacao.update({
        where:{
          id: variacao_id
        },
        data: {
          disponibilidadeVariacao: false
        }
      })

      return isFalse;
    }

    if(activeFalse.disponibilidadeVariacao === false){
      const isTrue = await prismaClient.variacao.update({
        where:{
          id: variacao_id
        },
        data: {
          disponibilidadeVariacao: true
        }
      })

      return isTrue;

    }

  }
}

export { UpdateDisponibilidadeVariacaoService }