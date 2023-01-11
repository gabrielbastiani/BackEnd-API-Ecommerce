import prismaClient from "../../prisma";

interface LojaRequest {
   loja_id: any;
   complementoLoja: string;
}

class UpdateComplementoLojaService {
  async execute({ loja_id, complementoLoja }: LojaRequest){
    const updateLoja = await prismaClient.loja.update({
      where:{
        id: String(loja_id)
      },
      data:{
        complementoLoja: complementoLoja,
      }
    })

    return updateLoja;

  }
}

export { UpdateComplementoLojaService }