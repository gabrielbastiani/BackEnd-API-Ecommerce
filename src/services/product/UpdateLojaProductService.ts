import prismaClient from "../../prisma";

interface ProductRequest {
   product_id: any;
   loja_id: string;
}

class UpdateLojaProductService {
  async execute({ product_id, loja_id }: ProductRequest){
    const updatelojaid = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        loja_id: loja_id,
      }
    })

    return updatelojaid;

  }
}

export { UpdateLojaProductService }