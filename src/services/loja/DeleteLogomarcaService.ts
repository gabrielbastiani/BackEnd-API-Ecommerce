import prismaClient from "../../prisma";

class DeleteLogomarcaService {
  async execute({ store_id }){
    const logomarcaLoja = await prismaClient.loja.findUnique({
      where:{
        id: String(store_id)
      }
    })

    return logomarcaLoja;
    
  }
}

export { DeleteLogomarcaService }