import prismaClient from "../../../prisma";

interface TypeRequest {
  type: string;
  slug: string;
  store_id: string;
}

class CreateTypeAttributeService {
  async execute({ type, store_id }: TypeRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    const typeAttribute = await prismaClient.typeAttribute.create({
      data: {
        type: type,
        slug: removerAcentos(type),
        store_id: store_id
      }
    });

    return typeAttribute;

  }
}

export { CreateTypeAttributeService }