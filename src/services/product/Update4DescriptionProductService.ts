import prismaClient from "../../prisma";

interface ProductRequest {
   product_id: any;
   descriptionProduct4: string;
}

class Update4DescriptionProductService {
  async execute({ product_id, descriptionProduct4 }: ProductRequest){
    const updateDescription = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        descriptionProduct4: descriptionProduct4,
      }
    })

    return updateDescription;

  }
}

export { Update4DescriptionProductService }