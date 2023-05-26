import prismaClient from "../../../prisma";

interface ImageRequest {
  image: string;
  product_id: string;
  order: number;
}

class CreatePhotoProductService {
  async execute({ image, product_id, order }: ImageRequest){
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

export { CreatePhotoProductService }