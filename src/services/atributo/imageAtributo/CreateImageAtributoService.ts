import prismaClient from "../../../prisma";

interface AtributoRequest {
  imageAtributo: string;
  atributo_id: string;
}

class CreateImageAtributoService {
  async execute({ imageAtributo, atributo_id }: AtributoRequest) {
    const atributo = await prismaClient.imageAtributo.create({
      data: {
        imageAtributo: imageAtributo,
        atributo_id: atributo_id
      }
    });

    return atributo;

  }
}

export { CreateImageAtributoService }