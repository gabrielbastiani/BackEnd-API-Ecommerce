import prismaClient from "../../prisma";

interface ContatoRequest {
  name: string;
  email: string;
  phone: string;
  empresa: string;
  setor: string;
  mensagem: string;
  loja_id: string;
}

class CreateContatoService {
  async execute({ name, email, phone, empresa, setor, mensagem, loja_id }: ContatoRequest){
    const contato = await prismaClient.contato.create({
      data:{
        name: name,
        email: email,
        phone: phone,
        empresa: empresa,
        setor: setor,
        mensagem: mensagem,
        loja_id: loja_id
      }
    })

    return contato;

  }
}

export { CreateContatoService }