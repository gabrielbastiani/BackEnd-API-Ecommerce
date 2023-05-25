import prismaClient from "../../prisma";

interface CategoryRequest {
  name: string;
  slug: string;
  description: string;
  nivel: number;
  relationId: string;
  order: number;
  store_id: string;
}

class CreateCategoryService {
  async execute({ name, description, nivel, relationId, order, store_id }: CategoryRequest) {

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
        description: description,
        nivel: nivel,
        relationId: relationId,
        order: order,
        store_id: store_id
      }
    });

    return category;

  }
}

export { CreateCategoryService }