import prismaClient from "../../../prisma";

interface PhotoRequest {
  photo: string;
  product_id: string;
}

class PhotoProductService {
  async execute({ photo, product_id }: PhotoRequest){

    const photoProduts = await prismaClient.photoProduct.create({
      data:{
        photo: photo,
        product_id: product_id,
      },
      select: {
        id: true,
        photo: true,
        product_id: true
      }
    })

    return photoProduts;

  }
}

export { PhotoProductService }