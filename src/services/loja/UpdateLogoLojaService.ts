import prismaClient from "../../prisma";

interface LojaRequest {
   store_id: any;
   logoLoja: string;
}

class UpdateLogoLojaService {
  async execute({ store_id, logoLoja }: LojaRequest){
    const updateLoja = await prismaClient.loja.update({
      where:{
        id: String(store_id)
      },
      data:{
        logoLoja: logoLoja,
      }
    })

    return updateLoja;

  }
}

export { UpdateLogoLojaService }