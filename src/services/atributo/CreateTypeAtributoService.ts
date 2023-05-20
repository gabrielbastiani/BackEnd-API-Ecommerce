import prismaClient from "../../prisma";

interface AtributoRequest {
  tipo: string;
  loja_id: string;
}

class CreateTypeAtributoService {
  async execute({ tipo, loja_id }: AtributoRequest) {
    const atributo = await prismaClient.typeAtribute.create({
      data: {
        tipo: tipo,
        loja_id: loja_id
      }
    });

    return atributo;

  }
}

export { CreateTypeAtributoService }