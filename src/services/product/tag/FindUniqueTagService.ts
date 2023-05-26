import prismaClient from "../../../prisma";

interface TagRequest {
  tag_id: string;
}

class FindUniqueTagService {
  async execute({ tag_id }: TagRequest) {
    const tagFind = await prismaClient.tag.findUnique({
      where: {
        id: tag_id
      }
    })

    return tagFind;

  }
}

export { FindUniqueTagService }