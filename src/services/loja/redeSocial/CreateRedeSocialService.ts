import prismaClient from "../../../prisma";

interface LojaRequest {
  redeName: string;
  link: string;
  imageRede: string;
  order: number;
  loja_id: string;
}

class CreateRedeSocialService {
  async execute({ redeName, link, imageRede, order, loja_id }: LojaRequest) {
    const loja = await prismaClient.redeSocial.create({
      data: {
        redeName: redeName,
        link: link,
        imageRede: imageRede,
        order: Number(order),
        loja_id: loja_id
      }
    })

    return loja;

  }
}

export { CreateRedeSocialService }