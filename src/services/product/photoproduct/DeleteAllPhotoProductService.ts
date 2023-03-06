import prismaClient from "../../../prisma";

interface ProductRequest {
  product_id: string;
}

class DeleteAllPhotoProductService {
  async execute({ product_id }: ProductRequest) {

    const photosProduct = await prismaClient.photoProduct.deleteMany({
      where: {
        product_id: product_id
      }
    })

    return photosProduct;
  }

}

export { DeleteAllPhotoProductService }