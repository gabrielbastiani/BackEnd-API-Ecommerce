import prismaClient from "../../../../prisma";

interface AtributoRequest {
  imageAtributo: string;
  filterAtributo_id: string;
}

class CreateImageFiltroAtributoService {
  async execute({ imageAtributo, filterAtributo_id }: AtributoRequest) {
    const atributo = await prismaClient.imageFilterAtributo.create({
      data: {
        imageAtributo: imageAtributo,
        filterAtributo_id: filterAtributo_id
      }
    });

    return atributo;

  }
}

export { CreateImageFiltroAtributoService }