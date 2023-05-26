import prismaClient from "../../../prisma";

interface ImageRequest {
  photoProduts_id: string;
  order: number;
}

class UpdateOrderPhotoProductService {
  async execute({ photoProduts_id, order }: ImageRequest) {
    const photoProduts = await prismaClient.photoProduct.update({
      where: {
        id: photoProduts_id
      },
      data: {
        order: order,
      }
    })

    return photoProduts;

  }
}

export { UpdateOrderPhotoProductService }