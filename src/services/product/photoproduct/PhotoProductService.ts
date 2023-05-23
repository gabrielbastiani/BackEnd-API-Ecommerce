import prismaClient from "../../../prisma";

interface PhotoRequest {
  image: string;
  product_id: string;
  order: number;
}

class PhotoProductService {
  async execute({ image, product_id, order }: PhotoRequest){
    const photoProduts = await prismaClient.photoProduct.create({
      data:{
        image: image,
        product_id: product_id,
        order: order,
      }
    });

    return photoProduts;

  }
}

export { PhotoProductService }