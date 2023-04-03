import prismaClient from "../../../prisma";

interface LojaRequest {
  redeName: string;
  link: string;
  imageRede: string;
  order: number;
  posicao: string;
  slugPosicao: string;
  loja_id: string;
}

class CreateRedeSocialService {
  async execute({ redeName, link, imageRede, order, posicao, loja_id }: LojaRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    const loja = await prismaClient.redeSocial.create({
      data: {
        redeName: redeName,
        link: link,
        imageRede: imageRede,
        order: Number(order),
        posicao: posicao,
        slugPosicao: removerAcentos(posicao),
        loja_id: loja_id
      }
    })

    return loja;

  }
}

export { CreateRedeSocialService }