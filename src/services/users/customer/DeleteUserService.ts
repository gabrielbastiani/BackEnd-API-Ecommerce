import prismaClient from "../../prisma";

interface UserRequest{
  admin_id: string;
}

class DeleteUserService{
  async execute({ admin_id }: UserRequest){

      const user = await prismaClient.user.delete({
        where:{
          id: admin_id 
        }
      })
  
      return user;
    }
    
}

export { DeleteUserService }