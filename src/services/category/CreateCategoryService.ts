import prismaClient from "../../prisma";

interface CategoryRequest {
  categoryName: string;
  slug: string;
  codigo: string;
  loja_id: string;
}

class CreateCategoryService {
  async execute({ categoryName, slug, codigo, loja_id }: CategoryRequest){

    function removerAcentos(s: any) {
      return s.normalize('NFD')
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .replace(/ +/g, "-")
          .replace(/-{2,}/g, "-")
          .replace(/[/]/g, "-");
  }
    
    if(categoryName === ''){
      throw new Error('categoryName invalid')
    }

    const category = await prismaClient.category.create({
      data:{
        categoryName: categoryName,
        slug: removerAcentos(categoryName),
        codigo: codigo,
        loja_id: loja_id
      }
    })

    return category;

  }
}

export { CreateCategoryService }