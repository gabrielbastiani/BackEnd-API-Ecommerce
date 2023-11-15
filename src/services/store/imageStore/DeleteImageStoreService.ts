import prismaClient from "../../../prisma";

interface ImageRequest {
  imageStore_id: string;
}

class DeleteImageStoreService {
  async execute({ imageStore_id }: ImageRequest) {

    const store = await prismaClient.store.findFirst();

    const imageStore = await prismaClient.imageStore.findUnique({
      where: {
        id: imageStore_id
      }
    });

    await prismaClient.notificationAdmin.create({
      data: {
        message: `Imagem institucional <strong>${imageStore.titleImage}</strong> foi deletada com sucesso da loja.`,
        store_id: store.id
      }
    });

    const images = await prismaClient.imageStore.delete({
      where: {
        id: imageStore_id
      }
    })

    return images;
  }

}

export { DeleteImageStoreService }