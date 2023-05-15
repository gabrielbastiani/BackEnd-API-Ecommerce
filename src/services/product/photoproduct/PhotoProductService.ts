import prismaClient from "../../../prisma";

interface PhotoRequest {
  photo: string;
  product_id: string;
  order: number;
}

class PhotoProductService {
  async execute({ photo, product_id, order }: PhotoRequest){
    const photoProduts = await prismaClient.photoProduct.create({
      data:{
        photo: photo,
        product_id: product_id,
        order: order,
      }
    });

    return photoProduts;

  }
}

export { PhotoProductService }