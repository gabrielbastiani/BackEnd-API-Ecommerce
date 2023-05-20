import prismaClient from "../../prisma";

interface AtributoRequest {
  tipo: string;
  product_id: string;
  valor: string;
  loja_id: string;
}

class CreateValueAtributoService {
  async execute({ tipo, product_id, valor, loja_id }: AtributoRequest) {
    const atributo = await prismaClient.valueAtribute.create({
      data: {
        tipo: tipo,
        product_id: product_id,
        valor: valor,
        loja_id: loja_id
      }
    });

    return atributo;

  }
}

export { CreateValueAtributoService }