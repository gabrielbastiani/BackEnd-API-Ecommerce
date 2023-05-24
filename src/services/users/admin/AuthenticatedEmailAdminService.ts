import prismaClient from "../../../prisma"; 

interface AdminRequest {
  admin_id: string;
}

class AuthenticatedEmailAdminService {
  async execute({ admin_id }: AdminRequest){
    const admin = await prismaClient.admin.update({
      where:{
        id: admin_id
      },
      data:{
         authenticated: true
      },
    })

    return admin;

  }
}

export { AuthenticatedEmailAdminService }