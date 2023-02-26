import prismaClient from "../../prisma";

interface ProductRequest {
   product_id: any;
   descriptionProduct1: string;
   descriptionProduct2: string;
   descriptionProduct3: string;
   descriptionProduct4: string;
   descriptionProduct5: string;
   descriptionProduct6: string;
}

class UpdateAllDescriptionProductService {
  async execute({ product_id, descriptionProduct1, descriptionProduct2, descriptionProduct3, descriptionProduct4, descriptionProduct5, descriptionProduct6 }: ProductRequest){
    const updateDescription1 = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        descriptionProduct1: descriptionProduct1,
      }
    })

    const updateDescription2 = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        descriptionProduct2: descriptionProduct2,
      }
    })

    const updateDescription3 = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        descriptionProduct3: descriptionProduct3,
      }
    })

    const updateDescription4 = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        descriptionProduct4: descriptionProduct4,
      }
    })

    const updateDescription5 = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        descriptionProduct5: descriptionProduct5,
      }
    })

    const updateDescription6 = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        descriptionProduct6: descriptionProduct6,
      }
    })

    return [updateDescription1, updateDescription2, updateDescription3, updateDescription4, updateDescription5, updateDescription6]

  }
}

export { UpdateAllDescriptionProductService }