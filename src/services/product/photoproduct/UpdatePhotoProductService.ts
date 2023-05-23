import prismaClient from "../../../prisma";

interface PhotoRequest {
   photoProduts_id: any;
   image: string;
}

class UpdatePhotoProductService {
  async execute({ photoProduts_id, image }: PhotoRequest){
    const updatePhoto = await prismaClient.photoProduct.update({
      where:{
        id: String(photoProduts_id)
      },
      data:{
        image: image,
      }
    })

    return updatePhoto;

  }
}

export { UpdatePhotoProductService }