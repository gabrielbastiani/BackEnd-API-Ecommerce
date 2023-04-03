import prismaClient from "../../../prisma";

interface PhotoRequest {
   photoProduts_id: any;
   photo: string;
}

class UpdatePhotoProductService {
  async execute({ photoProduts_id, photo }: PhotoRequest){
    const updatePhoto = await prismaClient.photoProduct.update({
      where:{
        id: String(photoProduts_id)
      },
      data:{
        photo: photo,
      }
    })

    return updatePhoto;

  }
}

export { UpdatePhotoProductService }