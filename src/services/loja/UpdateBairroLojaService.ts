import prismaClient from "../../prisma";

interface LojaRequest {
   loja_id: any;
   bairroLoja: string;
}

class UpdateBairroLojaService {
  async execute({ loja_id, bairroLoja }: LojaRequest){
    const updateLoja = await prismaClient.loja.update({
      where:{
        id: String(loja_id)
      },
      data:{
        bairroLoja: bairroLoja,
      }
    })

    return updateLoja;

  }
}

export { UpdateBairroLojaService }