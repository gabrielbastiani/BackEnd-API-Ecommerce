import prismaClient from "../../prisma";

interface CategoryRequest {
  categoryName: string;
  slug: string;
  order: number;
  posicao: string;
  slugPosicao: string;
  product_id: string;
  loja_id: string;
}

class CreateCategoryService {
  async execute({ categoryName, order, posicao, product_id, loja_id }: CategoryRequest) {

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
        posicao: posicao,
        slugPosicao: removerAcentos(posicao),
        product_id: product_id,
        loja_id: loja_id
      },
      include: {
        products: true,
        product: true,
        subcategories: true,
      }
    });

    return category;

  }
}

export { CreateCategoryService }