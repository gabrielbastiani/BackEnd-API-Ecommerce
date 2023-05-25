import prismaClient from "../../../prisma";

interface ImageRequest {
  imageStore_id: string;
  image: string;
}

class UpdateImageStoreService {
  async execute({ imageStore_id, image }: ImageRequest) {
    const updateImage = await prismaClient.imageStore.update({
      where: {
        id: imageStore_id
      },
      data: {
        image: image,
      }
    })

    return updateImage;

  }
}

export { UpdateImageStoreService }