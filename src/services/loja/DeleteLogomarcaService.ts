import prismaClient from "../../prisma";

class DeleteLogomarcaService {
  async execute({ loja_id }){
    const logomarcaLoja = await prismaClient.loja.findUnique({
      where:{
        id: String(loja_id)
      }
    })

    return logomarcaLoja;
    
  }
}

export { DeleteLogomarcaService }