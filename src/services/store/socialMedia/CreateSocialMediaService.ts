import prismaClient from "../../../prisma";

interface StoreRequest {
  name: string;
  link: string;
  image: string;
  order: number;
  position: string;
  slugPosition: string;
}

class CreateSocialMediaService {
  async execute({ name, link, image, order, position }: StoreRequest) {

    const store = await prismaClient.store.findFirst();

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    const social = await prismaClient.socialMedia.create({
      data: {
        name: name,
        link: link,
        image: image,
        order: Number(order),
        position: position,
        slugPosition: removerAcentos(position),
        store_id: store.id
      }
    })

    return social;

  }
}

export { CreateSocialMediaService }