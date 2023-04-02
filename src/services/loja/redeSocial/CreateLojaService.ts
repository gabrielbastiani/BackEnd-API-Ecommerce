import prismaClient from "../../../prisma";

interface LojaRequest {
    
}

class CreateLojaService {
  async execute({  }: LojaRequest){
    const loja = await prismaClient..create({
      data:{
        
      }
    })

    return loja;

  }
}

export { CreateLojaService }