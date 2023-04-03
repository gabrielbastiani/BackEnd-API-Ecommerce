import prismaClient from "../../../prisma";

interface RequestPhoto {
  photoProduts_id: string;
}

class RemovePhotoProductService {
  async execute({ photoProduts_id }: RequestPhoto) {
    const photoProduts = await prismaClient.photoProduct.findUnique({
      where: {
        id: photoProduts_id
      }
    })

    return photoProduts;

  }
}

export { RemovePhotoProductService }