import prismaClient from "../../prisma";

interface CategoryRequest{
   category_id: any;
   categoryName: string;
   slug: string;
}

class UpdateNameCategoryService {
  async execute({ category_id, categoryName }: CategoryRequest){

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    const updateCategory = await prismaClient.category.update({
      where:{
        id: String(category_id)
      },
      data:{
        categoryName: categoryName,
        slug: removerAcentos(categoryName)
      }
    })

    return updateCategory;

  }
}

export { UpdateNameCategoryService }