import prismaClient from "../../../prisma";

interface TextRequest {
  store_id: string;
  title: string;
  slug: string;
  order: number;
  position: string;
  slugPosition: string;
  description: string;
}

class CreateInstitutionalTextService {
  async execute({
    store_id,
    title,
    order,
    position,
    description,
  }: TextRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    const text = await prismaClient.institutionalText.create({
      data: {
        title: title,
        slug: removerAcentos(title),
        order: Number(order),
        position: position,
        slugPosition: removerAcentos(position),
        description: description,
        store_id: store_id
      }
    })

    return text;

  }
}

export { CreateInstitutionalTextService }