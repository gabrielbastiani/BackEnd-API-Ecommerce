import prismaClient from "../../prisma";

interface ProductRequest {
   product_id: any;
   category_id: string;
}

class UpdateCategoryUProductService {
  async execute({ product_id, category_id }: ProductRequest){
    const updatecategoryid = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        category_id: category_id,
      }
    })

    return updatecategoryid;

  }
}

export { UpdateCategoryUProductService }