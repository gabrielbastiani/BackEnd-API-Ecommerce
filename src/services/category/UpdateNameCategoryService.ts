import prismaClient from "../../prisma";

interface CategoryRequest {
  category_id: string;
  name: string;
  slug: string;
}

class UpdateNameCategoryService {
  async execute({ category_id, name }: CategoryRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    const updateCategory = await prismaClient.category.update({
      where: {
        id: category_id
      },
      data: {
        name: name,
        slug: removerAcentos(name)
      }
    })

    return updateCategory;

  }
}

export { UpdateNameCategoryService }