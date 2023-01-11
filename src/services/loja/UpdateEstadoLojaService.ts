import prismaClient from "../../prisma";

interface LojaRequest {
   loja_id: any;
   stateLoja: string;
}

class UpdateEstadoLojaService {
  async execute({ loja_id, stateLoja }: LojaRequest){
    const updateLoja = await prismaClient.loja.update({
      where:{
        id: String(loja_id)
      },
      data:{
        stateLoja: stateLoja,
      }
    })

    return updateLoja;

  }
}

export { UpdateEstadoLojaService }