import prismaClient from "../../prisma";

interface AtributoRequest {
  tipo: string;
  slug: string;
  valor: string;
  slugValor: string;
  store_id: string;
}

class CreateAtributoService {
  async execute({ tipo, valor, store_id }: AtributoRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    const atributo = await prismaClient.atributo.create({
      data: {
        tipo: tipo,
        slug: removerAcentos(tipo),
        valor: valor,
        slugValor: removerAcentos(valor),
        store_id: store_id
      }
    });

    return atributo;

  }
}

export { CreateAtributoService }