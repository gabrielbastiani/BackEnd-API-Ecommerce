import prismaClient from "../../prisma";

interface CategoryRequest {
  name: string;
  slug: string;
  loja_id: string;
}

class CreateCategoryService {
  async execute({ name, loja_id }: CategoryRequest) {

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
        loja_id: loja_id
      }
    });

    return category;

  }
}

export { CreateCategoryService }