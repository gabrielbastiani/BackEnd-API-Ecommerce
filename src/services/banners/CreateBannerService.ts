import prismaClient from "../../prisma";

interface BannerRequest {
  title: string;
  width: string;
  height: string;
  dateInicio: string;
  dateFim: string;
  banner: string;
  order: number;
  url: string;
  posicao: string;
  active: string;
  slugPosicao: string;
}

class CreateBannerService {
  async execute({
    title,
    width,
    height,
    dateInicio,
    dateFim,
    banner,
    order,
    url,
    active,
    posicao
  }: BannerRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    const banners = await prismaClient.banner.create({
      data: {
        title: title,
        width: width,
        height: height,
        dateInicio: dateInicio,
        dateFim: dateFim,
        banner: banner,
        order: Number(order),
        url: url,
        active: active,
        posicao: posicao,
        slugPosicao: removerAcentos(posicao)
      }
    })

    return banners;

  }
}

export { CreateBannerService }