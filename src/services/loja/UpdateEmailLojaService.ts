import prismaClient from "../../prisma";

interface LojaRequest {
   loja_id: any;
   emailLoja: string;
}

class UpdateEmailLojaService {
  async execute({ loja_id, emailLoja }: LojaRequest){
    const updateLoja = await prismaClient.loja.update({
      where:{
        id: String(loja_id)
      },
      data:{
        emailLoja: emailLoja,
      }
    })

    return updateLoja;

  }
}

export { UpdateEmailLojaService }