import prismaClient from "../../../prisma";

interface PhotoRequest {
  photo: string;
  product_id: string;
  order: number;
  posicao: string;
  slugPosicao: string;
}

class PhotoProductService {
  async execute({ photo, product_id, order, posicao }: PhotoRequest){

    function removerAcentos(s: any) {
      return s.normalize('NFD')
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .replace(/ +/g, "-")
          .replace(/-{2,}/g, "-")
          .replace(/[/]/g, "-");
    }

    const photoProduts = await prismaClient.photoProduct.create({
      data:{
        photo: photo,
        product_id: product_id,
        order: order,
        posicao: posicao,
        slugPosicao: removerAcentos(posicao)
      }
    })

    return photoProduts;

  }
}

export { PhotoProductService }