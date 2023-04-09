import prismaClient from "../../../prisma";

interface SubCategoryRequest {
  subCategoryName: string;
  slug: string;
  order: number;
  posicao: string;
  slugPosicao: string;
  category_id: string;
  product_id: string;
  loja_id: string;
}

class CreateSubCategoryService {
  async execute({ subCategoryName, order, posicao, product_id, category_id, loja_id }: SubCategoryRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    const category = await prismaClient.subCategory.create({
      data: {
        subCategoryName: subCategoryName,
        slug: removerAcentos(subCategoryName),
        order: order,
        posicao: posicao,
        slugPosicao: removerAcentos(posicao),
        product_id: product_id,
        category_id: category_id,
        loja_id: loja_id
      },
      include: {
        products: true,
        category: true,
        product: true,
        loja: true
      }
    });

    return category;

  }
}

export { CreateSubCategoryService }