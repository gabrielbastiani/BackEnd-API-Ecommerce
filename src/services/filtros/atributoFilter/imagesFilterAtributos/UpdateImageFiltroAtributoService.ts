import prismaClient from "../../../../prisma";

interface ImageRequest {
  imageFilterAtributo_id: string;
  imageAtributo: string;
}

class UpdateImageFiltroAtributoService {
  async execute({ imageFilterAtributo_id, imageAtributo }: ImageRequest) {
    const updateImageFiltro = await prismaClient.imageFilterAtributo.update({
      where: {
        id: imageFilterAtributo_id
      },
      data: {
        imageAtributo: imageAtributo,
      }
    })

    return updateImageFiltro;

  }
}

export { UpdateImageFiltroAtributoService }