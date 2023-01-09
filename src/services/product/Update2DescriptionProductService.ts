import prismaClient from "../../prisma";

interface ProductRequest {
   product_id: any;
   descriptionProduct2: string;
}

class Update2DescriptionProductService {
  async execute({ product_id, descriptionProduct2 }: ProductRequest){
    const updateDescription = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        descriptionProduct2: descriptionProduct2,
      }
    })

    return updateDescription;

  }
}

export { Update2DescriptionProductService }