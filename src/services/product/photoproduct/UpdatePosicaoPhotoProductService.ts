import prismaClient from "../../../prisma";

interface PhotoRequest {
  photoProduts_id: any;
  posicao: string;
  slugPosicao: string;
}

class UpdatePosicaoPhotoProductService {
  async execute({ photoProduts_id, posicao }: PhotoRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    const photoProduts = await prismaClient.photoProduct.update({
      where: {
        id: String(photoProduts_id)
      },
      data: {
        posicao: posicao,
        slugPosicao: removerAcentos(posicao)
      }
    })

    return photoProduts;

  }
}

export { UpdatePosicaoPhotoProductService }