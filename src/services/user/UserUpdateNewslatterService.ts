import prismaClient from "../../prisma";

interface UserRequest{
  user_id: string;
}

class UserUpdateNewslatterService {
  async execute({ user_id }: UserRequest) {

    const activeTrue = await prismaClient.user.findUnique({
      where: {
        id: user_id
      },
      select: {
        newslatter: true
      }
    })

    const activeFalse = await prismaClient.user.findUnique({
      where: {
        id: user_id
      },
      select: {
        newslatter: true
      }
    })

    if(activeTrue.newslatter === true){
      const isFalse = await prismaClient.user.update({
        where:{
          id: user_id
        },
        data: {
          newslatter: false
        }
      })

      return isFalse;
    }

    if(activeFalse.newslatter === false){
      const isTrue = await prismaClient.user.update({
        where:{
          id: user_id
        },
        data: {
          newslatter: true
        }
      })

      return isTrue;

    }

  }
}

export { UserUpdateNewslatterService }