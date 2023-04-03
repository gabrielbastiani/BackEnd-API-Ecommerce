import prismaClient from "../../../prisma";

interface LojaRequest {
  title: string;
  slug: string;
  order: number;
  posicao: string;
  slugPosicao: string;
  description: string;
  loja_id: string;
}

class CreateTextoInstitucionalService {
  async execute({
    title,
    order,
    posicao,
    description,
    loja_id
  }: LojaRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    const loja = await prismaClient.textoInstitucional.create({
      data: {
        title: title,
        slug: removerAcentos(title),
        order: Number(order),
        posicao: posicao,
        slugPosicao: removerAcentos(posicao),
        description: description,
        loja_id: loja_id
      }
    })

    return loja;

  }
}

export { CreateTextoInstitucionalService }