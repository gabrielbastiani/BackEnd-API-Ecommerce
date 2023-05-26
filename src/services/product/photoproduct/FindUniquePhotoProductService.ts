import prismaClient from "../../../prisma";

interface ImageRequest {
  photoProduts_id: string;
}

class FindUniquePhotoProductService {
  async execute({ photoProduts_id }: ImageRequest) {
    const photoProduts = await prismaClient.photoProduct.findUnique({
      where: {
        id: photoProduts_id
      }
    })

    return photoProduts;

  }
}

export { FindUniquePhotoProductService }