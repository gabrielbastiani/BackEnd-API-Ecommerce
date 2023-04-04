import prismaClient from "../../prisma";

interface CategoryRequest {
  category_id: any;
  posicao: string;
  slugPosicao: string;
}

class UpdatePosicaoCategoryService {
  async execute({ category_id, posicao }: CategoryRequest) {

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
        id: String(category_id)
      },
      data: {
        posicao: posicao,
        slugPosicao: removerAcentos(posicao)
      }
    })

    return updateCategory;

  }
}

export { UpdatePosicaoCategoryService }