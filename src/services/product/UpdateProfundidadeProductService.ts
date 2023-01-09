import prismaClient from "../../prisma";

interface ProductRequest {
   product_id: any;
   profundidadeCM: number;
}

class UpdateProfundidadeProductService {
  async execute({ product_id, profundidadeCM }: ProductRequest){
    const updateprofundidadeCM = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        profundidadeCM: profundidadeCM,
      }
    })

    return updateprofundidadeCM;

  }
}

export { UpdateProfundidadeProductService }