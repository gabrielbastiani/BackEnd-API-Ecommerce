import prismaClient from "../../prisma";

interface CategoryRequest {
  categoryName: string;
  slug: string;
  order: number;
  loja_id: string;
}

class CreateCategoryService {
  async execute({ categoryName, order, loja_id }: CategoryRequest) {

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
        categoryName: categoryName,
        slug: removerAcentos(categoryName),
        order: order,
        loja_id: loja_id
      }
    });

    const findCategory = await prismaClient.category.findFirst({
      orderBy: {
        created_at: 'desc'
      }
    });

    await prismaClient.filterPage.create({
      data: {
        category_id: findCategory.id
      }
    });

    return category;

  }
}

export { CreateCategoryService }