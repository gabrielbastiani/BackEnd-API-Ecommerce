import prismaClient from "../../../prisma";

interface ImageRequest {
  image: string;
  titleImage: string;
  order: number;
  position: string;
  slugPosition: string;
}

class CreateImageStoreService {
  async execute({ image, titleImage, order, position }: ImageRequest) {

    const store = await prismaClient.store.findFirst();

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
        store_id: store.id,
        image: image,
        titleImage: titleImage,
        order: Number(order),
        position: position,
        slugPosition: removerAcentos(position)
      }
    });

    const imageInstitucional = await prismaClient.imageStore.findFirst({
      orderBy: {
        created_at: 'asc'
      }
    });

    await prismaClient.notificationAdmin.create({
      data: {
        message: `Imagem institucional <strong>${imageInstitucional.titleImage}</strong> foi criada com sucesso da loja.`,
        store_id: store.id
      }
    });

    return images;

  }
}

export { CreateImageStoreService }