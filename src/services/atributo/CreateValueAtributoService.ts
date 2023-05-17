import prismaClient from "../../prisma";

interface AtributoRequest {
  valor: string;
  product_id: string;
  typeAtribute_id: string;
  order: number;
  loja_id: string;
}

class CreateValueAtributoService {
  async execute({ valor, product_id, typeAtribute_id, order, loja_id }: AtributoRequest) {
    const atributo = await prismaClient.valueAtribute.create({
      data: {
        order: order,
        product_id: product_id,
        typeAtribute_id: typeAtribute_id,
        valor: valor,
        loja_id: loja_id
      }
    });

    return atributo;

  }
}

export { CreateValueAtributoService }