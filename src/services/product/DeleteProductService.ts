import prismaClient from "../../prisma";

interface ProductRequest {
  product_id: string;
  variacao_id: string;

}

class DeleteProductService {
  async execute({ product_id, variacao_id }: ProductRequest) {
    const productDelete = await prismaClient.product.delete({
      where: {/* @ts-ignore */
        id: product_id
      }
    })

    await prismaClient.variacao.delete({
      where: {/* @ts-ignore */
        product_id: variacao_id
      }
    })

    await prismaClient.photoProduct.delete({
      where: {/* @ts-ignore */
        product_id: product_id
      }
    })

    await prismaClient.photoVariacao.delete({
      where: {/* @ts-ignore */
        product_id: product_id
      }
    })

    return productDelete;
  }

}

export { DeleteProductService }