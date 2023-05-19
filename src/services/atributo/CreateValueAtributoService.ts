import prismaClient from "../../prisma";

interface AtributoRequest {
  product_id: string;
  valor: [];
  tipo: string;
  order: number;
  loja_id: string;
}

class CreateValueAtributoService {
  async execute({ product_id, tipo, valor, order, loja_id }: AtributoRequest) {
    const atributo = await prismaClient.valueAtribute.create({
      data: {
        product_id: product_id,
        order: order,
        tipo: tipo,
        valor: valor,
        loja_id: loja_id
      }
    });

    return atributo;

  }
}

export { CreateValueAtributoService }