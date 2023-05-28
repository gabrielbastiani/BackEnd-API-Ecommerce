import prismaClient from "../../../prisma";

interface GroupRequest {
  groupCategoy_id: any;
  nameGroup: string;
}

class UpdateNameGrupoService {
  async execute({ groupCategoy_id, nameGroup }: GroupRequest) {
    const updateName = await prismaClient.menuCategory.update({
      where: {
        id: groupCategoy_id
      },
      data: {
        nameGroup: nameGroup,
      }
    });

    return updateName;

  }
}

export { UpdateNameGrupoService }