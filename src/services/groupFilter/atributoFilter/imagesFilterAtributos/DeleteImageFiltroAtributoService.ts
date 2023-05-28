import prismaClient from "../../../../prisma";

interface ImageRequest {
  imageFilterAtributo_id: string;
}

class DeleteImageFiltroAtributoService {
  async execute({ imageFilterAtributo_id }: ImageRequest) {
    const deleteImage = await prismaClient.imageFilterAtributo.delete({
      where: {
        id: imageFilterAtributo_id
      }
    });

    return deleteImage;

  }
}

export { DeleteImageFiltroAtributoService }