import prismaClient from "../../prisma";

interface CategoryRequest {
  category_id: any;
  posicao: string;
}

class UpdatePosicaoCategoryService {
  async execute({ category_id, posicao }: CategoryRequest) {
    const updateCategory = await prismaClient.category.update({
      where: {
        id: String(category_id)
      },
      data: {
        posicao: posicao,
      }
    })

    return updateCategory;

  }
}

export { UpdatePosicaoCategoryService }