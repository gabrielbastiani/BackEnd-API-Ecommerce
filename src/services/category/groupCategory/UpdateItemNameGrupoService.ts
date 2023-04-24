import prismaClient from "../../../prisma";

interface GroupRequest {
  groupCategoy_id: string;
  itemName: string;
}

class UpdateItemNameGrupoService {
  async execute({ groupCategoy_id, itemName }: GroupRequest) {
    const updateName = await prismaClient.groupCategoy.update({
      where: {
        id: groupCategoy_id
      },
      data: {
        itemName: itemName,
      }
    });

    return updateName;

  }
}

export { UpdateItemNameGrupoService }