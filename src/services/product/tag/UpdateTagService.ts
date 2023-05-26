import prismaClient from "../../../prisma";

interface TagRequest {
  tag_id: string;
  tagName: string;
}

class UpdateTagService {
  async execute({ tagName, tag_id }: TagRequest) {
    const tag = await prismaClient.tag.update({
      where: {
        id: tag_id
      },
      data: {
        tagName: tagName
      }
    });

    return tag;

  }
}

export { UpdateTagService }