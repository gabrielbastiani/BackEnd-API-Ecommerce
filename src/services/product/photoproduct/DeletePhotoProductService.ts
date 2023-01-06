import prismaClient from "../../../prisma";

interface ProductRequest {
  photoProduts_id: string;
}

class DeletePhotoProductService {
  async execute({ photoProduts_id }: ProductRequest){

      const photo = await prismaClient.photoProduct.delete({
        where:{
          id: photoProduts_id 
        }
      })
  
      return photo;
    }
    
}

export { DeletePhotoProductService }