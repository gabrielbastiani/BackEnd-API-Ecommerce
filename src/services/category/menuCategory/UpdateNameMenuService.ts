import prismaClient from "../../../prisma";

interface MenuCategoryRequest {
  menuCategory_id: string;
  nameGroup: string;
}

class UpdateNameMenuService {
  async execute({ menuCategory_id, nameGroup }: MenuCategoryRequest) {
    const updateGroupName = await prismaClient.menuCategory.update({
      where: {
        id: menuCategory_id
      },
      data: {
        nameGroup: nameGroup,
      }
    });

    return updateGroupName;

  }
}

export { UpdateNameMenuService }