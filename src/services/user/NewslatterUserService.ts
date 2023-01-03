import prismaClient from "../../prisma";

interface UserRequest{
  user_id: string;
}

class NewslatterUserService {
  async execute({ user_id }: UserRequest){
    const user = await prismaClient.user.update({
      where:{
        id: user_id
      },
      data:{
         newslatter: true
      },
    })

    return user;

  }
}

export { NewslatterUserService }