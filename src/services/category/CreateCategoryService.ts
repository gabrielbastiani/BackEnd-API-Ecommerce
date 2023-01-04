import prismaClient from "../../prisma";

interface CategoryRequest {
  categoryName: string;
}

class CreateCategoryService {
  async execute({ categoryName }: CategoryRequest){
    
    if(categoryName === ''){
      throw new Error('categoryName invalid')
    }

    const category = await prismaClient.category.create({
      data:{
        categoryName: categoryName,
      },
      select: {
        id: true,
        categoryName: true,
        created_at: true,
        products: true
      }
    })

    return category;

  }
}

export { CreateCategoryService }