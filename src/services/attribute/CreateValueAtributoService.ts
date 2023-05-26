import prismaClient from "../../prisma";

interface AtributoRequest {
  tipo: string;
  product_id: string;
  valor: string;
  store_id: string;
}

class CreateValueAtributoService {
  async execute({ tipo, product_id, valor, store_id }: AtributoRequest) {
    const atributo = await prismaClient.valueAtribute.create({
      data: {
        tipo: tipo,
        product_id: product_id,
        valor: valor,
        store_id: store_id
      }
    });

    return atributo;

  }
}

export { CreateValueAtributoService }