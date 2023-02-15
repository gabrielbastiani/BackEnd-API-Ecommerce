import prismaClient from "../../prisma";

interface LojaRequest {
  loja_id: any;
  nameLoja: string;
  cnpjLoja: string;
  emailLoja: string;
  phoneLoja: string;
  ruaLoja: string;
  numeroLoja: string;
  bairroLoja: string;
  complementoLoja: string;
  cepLoja: string;
  cityLoja: string;
}

class UpdateAllDateLojaService {
  async execute({
    loja_id,
    nameLoja,
    cnpjLoja,
    emailLoja,
    phoneLoja,
    ruaLoja,
    numeroLoja,
    bairroLoja,
    complementoLoja,
    cepLoja,
    cityLoja
  }: LojaRequest) {
    const updateLoja = await prismaClient.loja.update({
      where: {
        id: String(loja_id)
      },
      data: {
        nameLoja: nameLoja,
        cnpjLoja: cnpjLoja,
        emailLoja: emailLoja,
        phoneLoja: phoneLoja,
        ruaLoja: ruaLoja,
        numeroLoja: numeroLoja,
        bairroLoja: bairroLoja,
        complementoLoja: complementoLoja,
        cepLoja: cepLoja,
        cityLoja: cityLoja
      }
    })

    return updateLoja;

  }
}

export { UpdateAllDateLojaService }