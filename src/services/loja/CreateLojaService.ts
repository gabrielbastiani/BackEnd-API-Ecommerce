import prismaClient from "../../prisma";

interface LojaRequest {
    nameLoja: string;
    logoLoja: string;
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
    stateLoja: string;
}

class CreateLojaService {
  async execute({
    nameLoja,
    logoLoja,
    cnpjLoja,
    emailLoja,
    phoneLoja,
    cellPhoneLoja,
    ruaLoja,
    numeroLoja,
    bairroLoja,
    complementoLoja,
    cepLoja,
    cityLoja,
    stateLoja,
  }: LojaRequest){
    const loja = await prismaClient.loja.create({
      data:{
        nameLoja: nameLoja,
        logoLoja: logoLoja,
        cnpjLoja: cnpjLoja,
        emailLoja: emailLoja,
        phoneLoja: phoneLoja,
        cellPhoneLoja: cellPhoneLoja,
        ruaLoja: ruaLoja,
        numeroLoja: numeroLoja,
        bairroLoja: bairroLoja,
        complementoLoja: complementoLoja,
        cepLoja: cepLoja,
        cityLoja: cityLoja,
        stateLoja: stateLoja,
      }
    })

    return loja;

  }
}

export { CreateLojaService }