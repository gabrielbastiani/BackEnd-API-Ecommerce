import prismaClient from "../../prisma";

interface CategoryRequest {
  name: string;
  slug: string;
  store_id: string;
}

class CreateCategoryService {
  async execute({ name, store_id }: CategoryRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    const category = await prismaClient.category.create({
      data: {
        name: name,
        slug: removerAcentos(name),
        store_id: store_id
      }
    });

    return category;

  }
}

export { CreateCategoryService }