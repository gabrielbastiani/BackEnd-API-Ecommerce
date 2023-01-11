import prismaClient from "../../prisma";

interface LojaRequest {
   loja_id: any;
   cepLoja: string;
}

class UpdateCEPLojaService {
  async execute({ loja_id, cepLoja }: LojaRequest){
    const updateLoja = await prismaClient.loja.update({
      where:{
        id: String(loja_id)
      },
      data:{
        cepLoja: cepLoja,
      }
    })

    return updateLoja;

  }
}

export { UpdateCEPLojaService }