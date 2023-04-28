import prismaClient from "../../../prisma";

interface GroupRequest {
  groupCategoy_id: string;
  slugCategoryOrItem: string;
}

class UpdateSlugGrupoService {
  async execute({ groupCategoy_id, slugCategoryOrItem }: GroupRequest) {
    const updateSlug = await prismaClient.groupCategoy.update({
      where: {
        id: groupCategoy_id
      },
      data: {
        slugCategoryOrItem: slugCategoryOrItem,
      }
    });

    return updateSlug;

  }
}

export { UpdateSlugGrupoService }