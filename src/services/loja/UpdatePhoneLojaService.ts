import prismaClient from "../../prisma";

interface LojaRequest {
   loja_id: any;
   phoneLoja: string;
}

class UpdatePhoneLojaService {
  async execute({ loja_id, phoneLoja }: LojaRequest){
    const updateLoja = await prismaClient.loja.update({
      where:{
        id: String(loja_id)
      },
      data:{
        phoneLoja: phoneLoja,
      }
    })

    return updateLoja;

  }
}

export { UpdatePhoneLojaService }