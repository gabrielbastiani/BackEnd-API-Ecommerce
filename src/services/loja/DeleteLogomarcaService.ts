import prismaClient from "../../prisma";

interface LojaRequest {
  loja_id: string;
}

class DeleteLogomarcaService {
  async execute({ loja_id }: LojaRequest){

    const logomarcaLoja = await prismaClient.loja.findUnique({
      where:{
        id: loja_id
      }
    })

    return logomarcaLoja;
    
  }
}

export { DeleteLogomarcaService }