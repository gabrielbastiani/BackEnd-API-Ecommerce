import prismaClient from "../../prisma";

interface UserRequest{
  user_id: string;
}

class ActiveOrDesactiveUserService {
  async execute({ user_id }: UserRequest) {

    const activeTrue = await prismaClient.user.findUnique({
      where: {
        id: user_id
      },
      select: {
        authenticated: true
      }
    })

    const activeFalse = await prismaClient.user.findUnique({
      where: {
        id: user_id
      },
      select: {
        authenticated: true
      }
    })

    if(activeTrue.authenticated === true){
      const isFalse = await prismaClient.user.update({
        where:{
          id: user_id
        },
        data: {
          authenticated: false
        }
      })

      return isFalse;
    }

    if(activeFalse.authenticated === false){
      const isTrue = await prismaClient.user.update({
        where:{
          id: user_id
        },
        data: {
          authenticated: true
        }
      })

      return isTrue;

    }

  }
}

export { ActiveOrDesactiveUserService }