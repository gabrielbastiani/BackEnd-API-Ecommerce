import prismaClient from "../../../../prisma";

interface RequestTexto {
  imageloja_id: string;
}

class DeletePhotoTextoService {
  async execute({ imageloja_id }: RequestTexto){
      const photoTexto = await prismaClient.imageLoja.delete({
        where:{
          id: imageloja_id
        }
      })
  
      return photoTexto;
    }
    
}

export { DeletePhotoTextoService }