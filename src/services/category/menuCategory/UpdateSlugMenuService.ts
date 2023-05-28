import prismaClient from "../../../prisma";

interface MenuCategoryRequest {
  menuCategory_id: string;
  slugCategory: string;
}

class UpdateSlugMenuService {
  async execute({ menuCategory_id, slugCategory }: MenuCategoryRequest) {
    const updateSlug = await prismaClient.menuCategory.update({
      where: {
        id: menuCategory_id
      },
      data: {
        slugCategory: slugCategory,
      }
    });

    return updateSlug;

  }
}

export { UpdateSlugMenuService }