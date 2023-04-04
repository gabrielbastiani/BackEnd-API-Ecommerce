import prismaClient from "../../../prisma";

interface PhotoRequest {
  photoProduts_id: any;
  order: number;
}

class UpdateOrderPhotoProductService {
  async execute({ photoProduts_id, order }: PhotoRequest) {
    const photoProduts = await prismaClient.photoProduct.update({
      where: {
        id: String(photoProduts_id)
      },
      data: {
        order: order,
      }
    })

    return photoProduts;

  }
}

export { UpdateOrderPhotoProductService }