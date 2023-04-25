import prismaClient from "../../../prisma";

interface GroupRequest {
  groupCategoy_id: string;
  posicao: string;
  slugPosicao: string;
}

class UpdatePosicaoGroupService {
  async execute({ groupCategoy_id, posicao }: GroupRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    const updatePosicao = await prismaClient.groupCategoy.update({
      where: {
        id: groupCategoy_id
      },
      data: {
        posicao: posicao,
        slugPosicao: removerAcentos(posicao)
      }
    })

    return updatePosicao;

  }
}

export { UpdatePosicaoGroupService }