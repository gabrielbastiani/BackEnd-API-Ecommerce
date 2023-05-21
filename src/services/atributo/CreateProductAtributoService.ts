import prismaClient from "../../prisma";

interface AtributoRequest {
  typeAtribute_id: string;
  product_id: string;
  loja_id: string;
}

class CreateProductAtributoService {
  async execute({ typeAtribute_id, product_id, loja_id }: AtributoRequest) {
    const atributo = await prismaClient.atributesProduct.create({
      data: {
        typeAtribute_id: typeAtribute_id,
        product_id: product_id,
        loja_id: loja_id
      }
    });

    return atributo;

  }
}

export { CreateProductAtributoService }