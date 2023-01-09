import prismaClient from "../../prisma";

interface ProductRequest {
   product_id: any;
   descriptionProduct5: string;
}

class Update5DescriptionProductService {
  async execute({ product_id, descriptionProduct5 }: ProductRequest){
    const updateDescription = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        descriptionProduct5: descriptionProduct5,
      }
    })

    return updateDescription;

  }
}

export { Update5DescriptionProductService }