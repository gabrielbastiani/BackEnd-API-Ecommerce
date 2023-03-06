import prismaClient from "../../prisma";

interface ProductRequest {
  product_id: string;
}

class DeleteProductService {
  async execute({ product_id }: ProductRequest) {
    const productDelete = await prismaClient.product.delete({
      where: {
        id: product_id
      }
    })

    return productDelete;
  }

}

export { DeleteProductService }