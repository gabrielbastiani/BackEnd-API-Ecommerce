import prismaClient from "../../../prisma";

interface AdminRequest {
  admin_id: string;
}

class ActiveOrDesactiveAdminService {
  async execute({ admin_id }: AdminRequest) {

    const activeTrue = await prismaClient.admin.findUnique({
      where: {
        id: admin_id
      },
      select: {
        authenticated: true
      }
    })

    const activeFalse = await prismaClient.admin.findUnique({
      where: {
        id: admin_id
      },
      select: {
        authenticated: true
      }
    })

    if(activeTrue.authenticated === true){
      const isFalse = await prismaClient.admin.update({
        where:{
          id: admin_id
        },
        data: {
          authenticated: false
        }
      })

      return isFalse;
    }

    if(activeFalse.authenticated === false){
      const isTrue = await prismaClient.admin.update({
        where:{
          id: admin_id
        },
        data: {
          authenticated: true
        }
      })

      return isTrue;

    }

  }
}

export { ActiveOrDesactiveAdminService }