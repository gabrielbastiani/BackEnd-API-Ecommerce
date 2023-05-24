import prismaClient from "../../prisma";

interface LojaRequest {
  store_id: any;
  nameLoja: string;
  cnpjLoja: string;
  emailLoja: string;
  phoneLoja: string;
  cellPhoneLoja: string;
  ruaLoja: string;
  numeroLoja: string;
  bairroLoja: string;
  complementoLoja: string;
  cepLoja: string;
  cityLoja: string;
}

class UpdateAllDateLojaService {
  async execute({
    store_id,
    nameLoja,
    cnpjLoja,
    emailLoja,
    phoneLoja,
    cellPhoneLoja,
    ruaLoja,
    numeroLoja,
    bairroLoja,
    complementoLoja,
    cepLoja,
    cityLoja
  }: LojaRequest) {
    const updateLoja = await prismaClient.loja.update({
      where: {
        id: String(store_id)
      },
      data: {
        nameLoja: nameLoja,
        cnpjLoja: cnpjLoja,
        emailLoja: emailLoja,
        phoneLoja: phoneLoja,
        cellPhoneLoja: cellPhoneLoja,
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