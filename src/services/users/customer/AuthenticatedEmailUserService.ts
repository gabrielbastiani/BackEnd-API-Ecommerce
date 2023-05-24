import prismaClient from "../../prisma";

interface UserRequest{
  admin_id: string;
}

class AuthenticatedEmailUserService{
  async execute({ admin_id }: UserRequest){
    const user = await prismaClient.user.update({
      where:{
        id: admin_id
      },
      data:{
         authenticated: true
      },
    })

    return user;

  }
}

export { AuthenticatedEmailUserService }