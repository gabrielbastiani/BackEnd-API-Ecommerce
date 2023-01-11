import prismaClient from "../../prisma";

interface LojaRequest {
   loja_id: any;
   nameLoja: string;
}

class UpdateNameLojaService {
  async execute({ loja_id, nameLoja }: LojaRequest){
    const updateLoja = await prismaClient.loja.update({
      where:{
        id: String(loja_id)
      },
      data:{
        nameLoja: nameLoja,
      }
    })

    return updateLoja;

  }
}

export { UpdateNameLojaService }