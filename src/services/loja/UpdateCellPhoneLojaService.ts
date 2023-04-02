import prismaClient from "../../prisma";

interface LojaRequest {
   loja_id: any;
   cellPhoneLoja: string;
}

class UpdateCellPhoneLojaService {
  async execute({ loja_id, cellPhoneLoja }: LojaRequest){
    const updateLoja = await prismaClient.loja.update({
      where:{
        id: String(loja_id)
      },
      data:{
        cellPhoneLoja: cellPhoneLoja,
      }
    })

    return updateLoja;

  }
}

export { UpdateCellPhoneLojaService }