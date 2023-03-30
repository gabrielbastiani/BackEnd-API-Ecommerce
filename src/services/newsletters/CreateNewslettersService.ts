import prismaClient from "../../prisma";

interface NewsRequest {
  name: string;
  email: string;
  loja_id: string;
}

class CreateNewslettersService {
  async execute({ name, email, loja_id }: NewsRequest){
    const newsletter = await prismaClient.newsletter.create({
      data:{
        name: name,
        email: email,
        loja_id: loja_id
      }
    })

    return newsletter;

  }
}

export { CreateNewslettersService }