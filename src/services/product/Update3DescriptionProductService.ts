import prismaClient from "../../prisma";

interface ProductRequest {
   product_id: any;
   descriptionProduct3: string;
}

class Update3DescriptionProductService {
  async execute({ product_id, descriptionProduct3 }: ProductRequest){
    const updateDescription = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        descriptionProduct3: descriptionProduct3,
      }
    })

    return updateDescription;

  }
}

export { Update3DescriptionProductService }