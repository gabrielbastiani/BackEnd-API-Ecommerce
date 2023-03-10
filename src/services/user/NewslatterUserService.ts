import { News } from "@prisma/client";
import prismaClient from "../../prisma";

interface UserRequest {
  user_id: string;
}

class NewslatterUserService {
  async execute({ user_id }: UserRequest) {
    const active = await prismaClient.user.findUnique({
      where: {
        id: user_id
      },
      select: {
        newslatter: true
      }
    })

    if(active.newslatter === "Sim"){
      const isFalse = await prismaClient.user.update({
        where:{
          id: user_id
        },
        data: {
          newslatter: News.Nao
        }
      })

      return isFalse;
    }

    if(active.newslatter === "Nao"){
      const isTrue = await prismaClient.user.update({
        where:{
          id: user_id
        },
        data: {
          newslatter: News.Sim
        }
      })

      return isTrue;

    }

  }
}

export { NewslatterUserService }