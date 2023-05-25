import prismaClient from "../../../prisma";

interface ImageRequest {
  imageStore_id: string;
}

class DeleteImageStoreService {
  async execute({ imageStore_id }: ImageRequest) {
    const images = await prismaClient.imageStore.delete({
      where: {
        id: imageStore_id
      }
    })

    return images;
  }

}

export { DeleteImageStoreService }