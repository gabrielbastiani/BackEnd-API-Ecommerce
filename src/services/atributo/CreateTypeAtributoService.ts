import prismaClient from "../../prisma";

interface AtributoRequest {
  tipo: string;
  order: number;
  loja_id: string;
}

class CreateTypeAtributoService {
  async execute({ tipo, order, loja_id }: AtributoRequest) {
    const atributo = await prismaClient.typeAtribute.create({
      data: {
        tipo: tipo,
        order: order,
        loja_id: loja_id
      }
    });

    return atributo;

  }
}

export { CreateTypeAtributoService }