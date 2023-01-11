import prismaClient from "../../prisma";

interface LojaRequest {
   loja_id: any;
   ruaLoja: string;
}

class UpdateRuaLojaService {
  async execute({ loja_id, ruaLoja }: LojaRequest){
    const updateLoja = await prismaClient.loja.update({
      where:{
        id: String(loja_id)
      },
      data:{
        ruaLoja: ruaLoja,
      }
    })

    return updateLoja;

  }
}

export { UpdateRuaLojaService }