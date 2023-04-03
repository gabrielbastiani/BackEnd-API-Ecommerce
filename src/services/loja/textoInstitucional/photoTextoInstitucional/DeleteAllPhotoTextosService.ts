import prismaClient from "../../../../prisma";

interface RequestTextos {
  textoinstitucional_id: string;
}

class DeleteAllPhotoTextosService {
  async execute({ textoinstitucional_id }: RequestTextos) {
    const photosTextos = await prismaClient.imageLoja.deleteMany({
      where: {
        textoinstitucional_id: textoinstitucional_id
      }
    })

    return photosTextos;
  }

}

export { DeleteAllPhotoTextosService }