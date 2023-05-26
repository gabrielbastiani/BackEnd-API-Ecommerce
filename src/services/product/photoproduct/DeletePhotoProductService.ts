import prismaClient from "../../../prisma";

interface ImageRequest {
  photoProduts_id: string;
}

class DeletePhotoProductService {
  async execute({ photoProduts_id }: ImageRequest){
      const photoPro = await prismaClient.photoProduct.delete({
        where:{
          id: photoProduts_id 
        }
      })
  
      return photoPro;
    }
    
}

export { DeletePhotoProductService }