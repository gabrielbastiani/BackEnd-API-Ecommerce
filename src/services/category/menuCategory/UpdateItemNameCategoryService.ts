import prismaClient from "../../../prisma";

interface MenuCategoryRequest {
  menuCategory_id: string;
  categoryName: string;
}

class UpdateItemNameCategoryService {
  async execute({ menuCategory_id, categoryName }: MenuCategoryRequest) {
    const updateName = await prismaClient.menuCategory.update({
      where: {
        id: menuCategory_id
      },
      data: {
        categoryName: categoryName,
      }
    });

    return updateName;

  }
}

export { UpdateItemNameCategoryService }