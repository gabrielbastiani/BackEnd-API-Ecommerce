import prismaClient from "../../../prisma";

interface TagRequest {
  tag_id: string;
}

class DeleteTagService {
  async execute({ tag_id }: TagRequest) {
    const deleteTag = await prismaClient.tag.delete({
      where: {
        id: tag_id
      }
    })

    return deleteTag;
  }

}

export { DeleteTagService }