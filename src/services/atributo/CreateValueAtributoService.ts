import prismaClient from "../../prisma";

interface AtributoRequest {
  valor: [];
  typeAtribute_id: string;
  order: number;
  loja_id: string;
}

class CreateValueAtributoService {
  async execute({ typeAtribute_id, valor, order, loja_id }: AtributoRequest) {
    const atributo = await prismaClient.valueAtribute.create({
      data: {
        order: order,
        typeAtribute_id: typeAtribute_id,
        valor: valor,
        loja_id: loja_id
      }
    });

    return atributo;

  }
}

export { CreateValueAtributoService }