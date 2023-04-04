import prismaClient from "../../prisma";

interface ProductRequest {
   product_id: any;
   posicao: string;
   slugPosicao: string;
}

class UpdatePosicaoProductService {
  async execute({ product_id, posicao }: ProductRequest){

    function removerAcentos(s: any) {
      return s.normalize('NFD')
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .replace(/ +/g, "-")
          .replace(/-{2,}/g, "-")
          .replace(/[/]/g, "-");
    }

    const updatePosicao = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        posicao: posicao,
        slugPosicao: removerAcentos(posicao)
      }
    })

    return updatePosicao;

  }
}

export { UpdatePosicaoProductService }