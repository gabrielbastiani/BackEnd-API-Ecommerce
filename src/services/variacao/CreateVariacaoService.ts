import prismaClient from "../../prisma";

interface VariacaoRequest {
  nameVariacao: string;
  urlProduct: string;
  product_id: string;
}

class CreateVariacaoService {
  async execute({ nameVariacao, urlProduct, product_id }: VariacaoRequest){
    
    if(urlProduct === ''){
      throw new Error('urlVariacao invalid')
    }

    const variacoes = await prismaClient.variacao.create({
      data:{
        nameVariacao: nameVariacao,
        product_id: product_id,
        urlProduct: urlProduct
      },
      select: {
        id: true,
        nameVariacao: true,
        urlProduct: true,
        product_id: true
      }
    })

    return variacoes;

  }
}

export { CreateVariacaoService }