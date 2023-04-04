import prismaClient from "../../../prisma";

interface SubCategoryRequest {
  subcategory_id: any;
  posicao: string;
  slugPosicao: string;
}

class UpdatePosicaoSubCategoryService {
  async execute({ subcategory_id, posicao }: SubCategoryRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    const updateCategory = await prismaClient.subCategory.update({
      where: {
        id: String(subcategory_id)
      },
      data: {
        posicao: posicao,
        slugPosicao: removerAcentos(posicao)
      }
    })

    return updateCategory;

  }
}

export { UpdatePosicaoSubCategoryService }