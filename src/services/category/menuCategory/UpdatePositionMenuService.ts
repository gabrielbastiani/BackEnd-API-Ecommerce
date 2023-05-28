import prismaClient from "../../../prisma";

interface MenuCategoryRequest {
  menuCategory_id: string;
  position: string;
  slugPosition: string;
}

class UpdatePositionMenuService {
  async execute({ menuCategory_id, position }: MenuCategoryRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    const updatePosition = await prismaClient.menuCategory.update({
      where: {
        id: menuCategory_id
      },
      data: {
        position: position,
        slugPosition: removerAcentos(position)
      }
    })

    return updatePosition;

  }
}

export { UpdatePositionMenuService }