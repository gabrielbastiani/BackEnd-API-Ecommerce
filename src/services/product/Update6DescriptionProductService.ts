import prismaClient from "../../prisma";

interface ProductRequest {
   product_id: any;
   descriptionProduct6: string;
}

class Update6DescriptionProductService {
  async execute({ product_id, descriptionProduct6 }: ProductRequest){
    const updateDescription = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        descriptionProduct6: descriptionProduct6,
      }
    })

    return updateDescription;

  }
}

export { Update6DescriptionProductService }