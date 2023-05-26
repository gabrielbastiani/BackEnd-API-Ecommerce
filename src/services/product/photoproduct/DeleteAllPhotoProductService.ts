import prismaClient from "../../../prisma";

interface ImageRequest {
  product_id: string;
}

class DeleteAllPhotoProductService {
  async execute({ product_id }: ImageRequest) {
    const photosProduct = await prismaClient.photoProduct.deleteMany({
      where: {
        product_id: product_id
      }
    })

    return photosProduct;
  }

}

export { DeleteAllPhotoProductService }