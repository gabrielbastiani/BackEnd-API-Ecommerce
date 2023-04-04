import prismaClient from '../../prisma';

interface BannerRequest {
  banner_id: any;
  posicao: string;
  slugPosicao: string;
}

class UpdatePosicaoBannerService {
  async execute({ banner_id, posicao }: BannerRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    const updateBanner = await prismaClient.banner.update({
      where: {
        id: String(banner_id),
      },
      data: {
        posicao: posicao,
        slugPosicao: removerAcentos(posicao)
      }
    })

    return updateBanner;
  }
}

export { UpdatePosicaoBannerService }