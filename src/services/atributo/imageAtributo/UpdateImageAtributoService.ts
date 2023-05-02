import prismaClient from "../../../prisma";

interface ImageRequest {
  imageAtributo_id: string;
  imageAtributo: string;
}

class UpdateImageAtributoService {
  async execute({ imageAtributo_id, imageAtributo }: ImageRequest) {
    const updateImageCategoies = await prismaClient.imageAtributo.update({
      where: {
        id: imageAtributo_id
      },
      data: {
        imageAtributo: imageAtributo,
      }
    })

    return updateImageCategoies;

  }
}

export { UpdateImageAtributoService }