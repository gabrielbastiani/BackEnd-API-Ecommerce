import prismaClient from "../../prisma";

interface AtributoRequest {
  tipo: string;
  store_id: string;
}

class CreateTypeAtributoService {
  async execute({ tipo, store_id }: AtributoRequest) {
    const atributo = await prismaClient.typeAtribute.create({
      data: {
        tipo: tipo,
        store_id: store_id
      }
    });

    return atributo;

  }
}

export { CreateTypeAtributoService }