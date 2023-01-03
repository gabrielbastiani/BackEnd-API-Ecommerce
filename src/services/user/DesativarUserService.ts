import prismaClient from "../../prisma";

interface UserRequest{
  user_id: string;
}

class DesativarUserService {
  async execute({ user_id }: UserRequest){
    const user = await prismaClient.user.update({
      where:{
        id: user_id
      },
      data:{
         authenticated: false
      },
    })

    return user;

  }
}

export { DesativarUserService }