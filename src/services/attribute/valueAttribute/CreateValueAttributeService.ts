import prismaClient from "../../../prisma";

interface ValueRequest {
  type: string;
  value: string;
  slug: string;
  store_id: string;
}

class CreateValueAttributeService {
  async execute({ type, value, store_id }: ValueRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    const attributeValue = await prismaClient.valueAttribute.create({
      data: {
        type: type,
        value: value,
        slug: removerAcentos(value),
        store_id: store_id
      }
    });

    return attributeValue;

  }
}

export { CreateValueAttributeService }