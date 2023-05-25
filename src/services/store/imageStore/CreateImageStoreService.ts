import prismaClient from "../../../prisma";

interface ImageRequest {
  store_id: string;
  image: string;
  titleImage: string;
  order: number;
  position: string;
  slugPosition: string;
}

class CreateImageStoreService {
  async execute({ store_id, image, titleImage, order, position }: ImageRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    const images = await prismaClient.imageStore.create({
      data: {
        store_id: store_id,
        image: image,
        titleImage: titleImage,
        order: Number(order),
        position: position,
        slugPosition: removerAcentos(position)
      }
    })

    return images;

  }
}

export { CreateImageStoreService }