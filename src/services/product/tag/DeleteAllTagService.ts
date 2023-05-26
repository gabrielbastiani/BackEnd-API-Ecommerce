import prismaClient from "../../../prisma";

interface TagRequest {
  product_id: string;
}

class DeleteAllTagService {
  async execute({ product_id }: TagRequest) {
    const deleteTag = await prismaClient.tag.deleteMany({
      where: {
        product_id: product_id
      }
    })

    return deleteTag;
  }

}

export { DeleteAllTagService }