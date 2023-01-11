import prismaClient from "../../prisma";

interface LojaRequest {
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
    stateLoja: string;
}

class CreateLojaService {
  async execute({
    nameLoja,
    cnpjLoja,
    emailLoja,
    phoneLoja,
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
        cnpjLoja: cnpjLoja,
        emailLoja: emailLoja,
        phoneLoja: phoneLoja,
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