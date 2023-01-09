import prismaClient from "../../prisma";

interface ProductRequest {
   product_id: any;
   descriptionProduct1: string;
}

class Update1DescriptionProductService {
  async execute({ product_id, descriptionProduct1 }: ProductRequest){
    const updateDescription = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        descriptionProduct1: descriptionProduct1,
      }
    })

    return updateDescription;

  }
}

export { Update1DescriptionProductService }