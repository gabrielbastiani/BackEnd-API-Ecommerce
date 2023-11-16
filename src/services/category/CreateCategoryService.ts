import prismaClient from "../../prisma";

interface CategoryRequest {
  name: string;
  slug: string;
  description: string;
  nivel: number;
  parentId: string;
  order: number;
  store_id: string;
}

class CreateCategoryService {
  async execute({ name, description, nivel, parentId, order, store_id }: CategoryRequest) {

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
        parentId: parentId,
        order: order,
        store_id: store_id
      }
    });

    const category_find = await prismaClient.category.findFirst({
      orderBy: {
        created_at: 'asc'
      }
    });

    await prismaClient.notificationAdmin.create({
      data: {
        message: `Uma nova categoria foi cadastrada <strong>${category_find.name}</strong>`,
        store_id: store_id
      }
    });

    return category;

  }
}

export { CreateCategoryService }