import prismaClient from "../../prisma";

interface CategoryRequest {
  categoryName: string;
  codigo: string;
  disponibilidade: boolean;
  loja_id: string;
}

class CreateCategoryService {
  async execute({ categoryName, codigo, disponibilidade, loja_id }: CategoryRequest){
    
    if(categoryName === ''){
      throw new Error('categoryName invalid')
    }

    const category = await prismaClient.category.create({
      data:{
        categoryName: categoryName,
        codigo: codigo,
        disponibilidade, disponibilidade,
        loja_id: loja_id
      },
      select: {
        id: true,
        categoryName: true,
        codigo: true,
        disponibilidade: true,
        created_at: true,
        loja_id: true,
        products: true
      }
    })

    return category;

  }
}

export { CreateCategoryService }