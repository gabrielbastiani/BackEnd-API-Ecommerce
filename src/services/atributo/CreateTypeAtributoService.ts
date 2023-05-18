import prismaClient from "../../prisma";

interface AtributoRequest {
  tipo: string;
  product_id: string;
  order: number;
  loja_id: string;
}

class CreateTypeAtributoService {
  async execute({ tipo, product_id, order, loja_id }: AtributoRequest) {
    const atributo = await prismaClient.typeAtribute.create({
      data: {
        tipo: tipo,
        product_id: product_id,
        order: order,
        loja_id: loja_id
      }
    });

    return atributo;

  }
}

export { CreateTypeAtributoService }