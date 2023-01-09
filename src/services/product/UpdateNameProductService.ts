import prismaClient from "../../prisma";

interface ProductRequest {
   product_id: any;
   nameProduct: string;
}

class UpdateNameProductService {
  async execute({ product_id, nameProduct }: ProductRequest){
    const updateName = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        nameProduct: nameProduct,
      }
    })

    return updateName;

  }
}

export { UpdateNameProductService }