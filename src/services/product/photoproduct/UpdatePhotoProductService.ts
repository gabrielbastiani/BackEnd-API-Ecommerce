import prismaClient from "../../../prisma";

interface ImageRequest {
   photoProduts_id: string;
   image: string;
}

class UpdatePhotoProductService {
  async execute({ photoProduts_id, image }: ImageRequest){
    const updatePhoto = await prismaClient.photoProduct.update({
      where:{
        id: photoProduts_id
      },
      data:{
        image: image,
      }
    })

    return updatePhoto;

  }
}

export { UpdatePhotoProductService }