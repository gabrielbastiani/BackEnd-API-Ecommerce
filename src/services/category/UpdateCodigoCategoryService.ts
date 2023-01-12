import prismaClient from "../../prisma";

interface CategoryRequest {
  codigo: string;
  category_id: string;
}

class UpdateCodigoCategoryService {
  async execute({ category_id, codigo }: CategoryRequest) {

    const category = await prismaClient.category.update({
      where: {
        id: String(category_id)
      },
      data: {
        codigo: codigo,
      }
    })

    return category;
  }

}

export { UpdateCodigoCategoryService }