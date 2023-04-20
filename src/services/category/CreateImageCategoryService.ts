import prismaClient from "../../prisma";

interface CategoryRequest {
  title: string;
  slug: string;
  categoryImage: string;
  order: number;
  posicao: string;
  slugPosicao: string;
  category_id: string;
}

class CreateImageCategoryService {
  async execute({ title, categoryImage, order, posicao, category_id }: CategoryRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    const category = await prismaClient.imageCategory.create({
      data: {
        title: title,
        slug: removerAcentos(title),
        categoryImage: categoryImage,
        order: order,
        posicao: posicao,
        slugPosicao: removerAcentos(posicao),
        category_id: category_id
      }
    });

    return category;

  }
}

export { CreateImageCategoryService }