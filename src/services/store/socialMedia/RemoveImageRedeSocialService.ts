import prismaClient from "../../../prisma";

interface LojaRequest {
  redesocial_id: string;
}

class RemoveImageRedeSocialService {
  async execute({ redesocial_id }: LojaRequest) {
    const imageRedes = await prismaClient.socialMedia.findUnique({
      where: {
        id: redesocial_id
      }
    })

    return imageRedes;

  }
}

export { RemoveImageRedeSocialService }