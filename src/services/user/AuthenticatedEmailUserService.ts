import prismaClient from "../../prisma";

interface UserRequest{
  user_id: string;
}

class AuthenticatedEmailUserService{
  async execute({ user_id }: UserRequest){
    const user = await prismaClient.user.update({
      where:{
        id: user_id
      },
      data:{
         authenticated: true
      },
    })

    return user;

  }
}

export { AuthenticatedEmailUserService }