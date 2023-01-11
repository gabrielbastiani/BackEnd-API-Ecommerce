import prismaClient from "../../prisma";

interface LojaRequest {
   loja_id: any;
   numeroLoja: string;
}

class UpdateNumeroLojaService {
  async execute({ loja_id, numeroLoja }: LojaRequest){
    const updateLoja = await prismaClient.loja.update({
      where:{
        id: String(loja_id)
      },
      data:{
        numeroLoja: numeroLoja,
      }
    })

    return updateLoja;

  }
}

export { UpdateNumeroLojaService }