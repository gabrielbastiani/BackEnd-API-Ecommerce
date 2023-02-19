import prismaClient from "../../prisma";

interface ProductRequest {
   product_id: any;
   categoryName: string;
}

class UpdateCategoryNameProductService {
  async execute({ product_id, categoryName }: ProductRequest){
    const updateCategoryName = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        categoryName: categoryName,
      }
    })

    return updateCategoryName;

  }
}

export { UpdateCategoryNameProductService }