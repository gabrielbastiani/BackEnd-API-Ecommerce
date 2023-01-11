import prismaClient from "../../prisma";

interface LojaRequest {
   loja_id: any;
   cityLoja: string;
}

class UpdateCidadeLojaService {
  async execute({ loja_id, cityLoja }: LojaRequest){
    const updateLoja = await prismaClient.loja.update({
      where:{
        id: String(loja_id)
      },
      data:{
        cityLoja: cityLoja,
      }
    })

    return updateLoja;

  }
}

export { UpdateCidadeLojaService }