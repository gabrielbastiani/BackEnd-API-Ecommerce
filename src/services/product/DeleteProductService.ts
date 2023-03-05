import prismaClient from "../../prisma";

interface ProductRequest {
  product_id: string;
}

class DeleteProductService {
  async execute({ product_id }: ProductRequest){
      const productDelete = await prismaClient.product.delete({
        where:{
          id: product_id 
        }
      })

      const variacao = await prismaClient.variacao.deleteMany({
        where:{
          product_id: product_id
        }
      })

      const photosProduct = await prismaClient.photoProduct.deleteMany({
        where:{
          id: product_id
        }
      })

      const photosVariacao = await prismaClient.photoVariacao.deleteMany({
        where:{
          id: product_id
        }
      })
  
      return [productDelete, variacao, photosProduct, photosVariacao];
    }
    
}

export { DeleteProductService }