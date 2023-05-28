import prismaClient from "../../../prisma";

interface GroupRequest {
  groupCategoy_id: any;
  category_id: string;
}

class UpdateCategoryGrupoService {
  async execute({ groupCategoy_id, category_id }: GroupRequest) {
    const updateCategory = await prismaClient.menuCategory.update({
      where: {
        id: groupCategoy_id
      },
      data: {
        category_id: category_id,
      }
    });

    return updateCategory;

  }
}

export { UpdateCategoryGrupoService }