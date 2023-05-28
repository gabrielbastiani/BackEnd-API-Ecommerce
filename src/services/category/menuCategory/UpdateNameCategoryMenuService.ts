import prismaClient from "../../../prisma";

interface MenuCategoryRequest {
  menuCategory_id: string;
  name: string;
}

class UpdateNameCategoryMenuService {
  async execute({ menuCategory_id, name }: MenuCategoryRequest) {
    const updateCategory = await prismaClient.menuCategory.update({
      where: {
        id: menuCategory_id
      },
      data: {
        name: name,
      }
    });

    return updateCategory;

  }
}

export { UpdateNameCategoryMenuService }