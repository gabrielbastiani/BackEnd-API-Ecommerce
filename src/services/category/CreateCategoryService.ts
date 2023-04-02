import prismaClient from "../../prisma";

interface CategoryRequest {
  categoryName: string;
  slug: string;
  order: number;
  codigo: string;
  loja_id: string;
}

class CreateCategoryService {
  async execute({ categoryName, order, codigo, loja_id }: CategoryRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    const userOrderExist = await prismaClient.category.findFirst({
      where: {
        order: order,
      }
    });

    if (userOrderExist) {
      throw new Error("Order already exists");
    };

    const category = await prismaClient.category.create({
      data: {
        categoryName: categoryName,
        slug: removerAcentos(categoryName),
        order: order,
        codigo: codigo,
        loja_id: loja_id
      }
    });

    return category;

  }
}

export { CreateCategoryService }