import prismaClient from "../../../../prisma";

interface PhotoRequest {
  imageloja_id: any;
  image: string;
}

class UpdatePhotoTextoService {
  async execute({ imageloja_id, image }: PhotoRequest) {
    const updatePhoto = await prismaClient.imageStore.update({
      where: {
        id: String(imageloja_id)
      },
      data: {
        image: image,
      }
    })

    return updatePhoto;

  }
}

export { UpdatePhotoTextoService }