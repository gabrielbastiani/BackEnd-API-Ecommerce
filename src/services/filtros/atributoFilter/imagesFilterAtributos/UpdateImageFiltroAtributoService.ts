import prismaClient from "../../../../prisma";

interface ImageRequest {
  imageFilterAtributo_id: string;
  imageAttribute: string;
}

class UpdateImageFiltroAtributoService {
  async execute({ imageFilterAtributo_id, imageAttribute }: ImageRequest) {
    const updateImageFiltro = await prismaClient.imageFilterAtributo.update({
      where: {
        id: imageFilterAtributo_id
      },
      data: {
        imageAttribute: imageAttribute,
      }
    })

    return updateImageFiltro;

  }
}

export { UpdateImageFiltroAtributoService }