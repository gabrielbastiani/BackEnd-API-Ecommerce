import prismaClient from "../../../../prisma";

interface AtributoRequest {
  imageAttribute: string;
  filterAtributo_id: string;
}

class CreateImageFiltroAtributoService {
  async execute({ imageAttribute, filterAtributo_id }: AtributoRequest) {
    const atributo = await prismaClient.imageFilterAtributo.create({
      data: {
        imageAttribute: imageAttribute,
        filterAtributo_id: filterAtributo_id
      }
    });

    return atributo;

  }
}

export { CreateImageFiltroAtributoService }