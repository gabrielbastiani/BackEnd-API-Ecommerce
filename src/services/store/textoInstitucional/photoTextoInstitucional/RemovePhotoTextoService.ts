import prismaClient from "../../../../prisma";

interface RequestPhoto {
  imageloja_id: string;
}

class RemovePhotoTextoService {
  async execute({ imageloja_id }: RequestPhoto) {
    const photoProduts = await prismaClient.imageLoja.findUnique({
      where: {
        id: imageloja_id
      }
    })

    return photoProduts;

  }
}

export { RemovePhotoTextoService }