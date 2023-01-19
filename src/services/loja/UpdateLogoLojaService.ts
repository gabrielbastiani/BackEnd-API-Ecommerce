import prismaClient from "../../prisma";

interface LojaRequest {
   loja_id: any;
   logoLoja: string;
}

class UpdateLogoLojaService {
  async execute({ loja_id, logoLoja }: LojaRequest){
    const updateLoja = await prismaClient.loja.update({
      where:{
        id: String(loja_id)
      },
      data:{
        logoLoja: logoLoja,
      }
    })

    return updateLoja;

  }
}

export { UpdateLogoLojaService }