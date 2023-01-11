import prismaClient from "../../prisma";

interface LojaRequest {
   loja_id: any;
   cnpjLoja: string;
}

class UpdateCNPJLojaService {
  async execute({ loja_id, cnpjLoja }: LojaRequest){
    const updateLoja = await prismaClient.loja.update({
      where:{
        id: String(loja_id)
      },
      data:{
        cnpjLoja: cnpjLoja,
      }
    })

    return updateLoja;

  }
}

export { UpdateCNPJLojaService }