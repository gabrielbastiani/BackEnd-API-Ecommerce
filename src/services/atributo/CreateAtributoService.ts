import prismaClient from "../../prisma";

interface AtributoRequest {
  tipo: string;
  slug: string;
  valor: string;
  slugValor: string;
  loja_id: string;
}

class CreateAtributoService {
  async execute({ tipo, valor, loja_id }: AtributoRequest) {

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
        loja_id: loja_id
      }
    });

    return atributo;

  }
}

export { CreateAtributoService }