import prismaClient from "../../../../prisma";

interface PhotoRequest {
  image: string;
  textoinstitucional_id: string;
  titleImage: string;
  order: number;
  posicao: string;
  slugPosicao: string;
  someImage: boolean;
}

class CreatePhotoTextoInstitucionalService {
  async execute({ image, textoinstitucional_id, titleImage, order, posicao, someImage }: PhotoRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    const photoTexto = await prismaClient.imageLoja.create({
      data: {
        image: image,
        textoinstitucional_id: textoinstitucional_id,
        titleImage: titleImage,
        order: Number(order),
        posicao: posicao,
        slugPosicao: removerAcentos(posicao),
        someImage: true
      }
    })

    return photoTexto;

  }
}

export { CreatePhotoTextoInstitucionalService }