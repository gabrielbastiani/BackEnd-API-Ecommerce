import prismaClient from "../../../../prisma";

interface ImageRequest {
  imageAtributoGroup_id: string;
  imageAtributo: string;
}

class UpdateImageAtributoFiltroGroupService {
  async execute({ imageAtributoGroup_id, imageAtributo }: ImageRequest) {
    const updateImageFiltro = await prismaClient.imageAtributoGroup.update({
      where: {
        id: imageAtributoGroup_id
      },
      data: {
        imageAtributo: imageAtributo,
      }
    })

    return updateImageFiltro;

  }
}

export { UpdateImageAtributoFiltroGroupService }