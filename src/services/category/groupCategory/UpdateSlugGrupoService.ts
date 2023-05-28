import prismaClient from "../../../prisma";

interface GroupRequest {
  groupCategoy_id: string;
  slugCategory: string;
}

class UpdateSlugGrupoService {
  async execute({ groupCategoy_id, slugCategory }: GroupRequest) {
    const updateSlug = await prismaClient.menuCategory.update({
      where: {
        id: groupCategoy_id
      },
      data: {
        slugCategory: slugCategory,
      }
    });

    return updateSlug;

  }
}

export { UpdateSlugGrupoService }