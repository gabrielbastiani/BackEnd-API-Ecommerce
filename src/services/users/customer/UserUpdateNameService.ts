import prismaClient from '../../prisma';

interface UserRequest {
  admin_id: any;
  slug: string;
  name: string;
}

class UserUpdateNameService {
  async execute({ admin_id, name }: UserRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .replace(/ +/g, "-")
          .replace(/-{2,}/g, "-")
          .replace(/[/]/g, "-");
    }

    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(admin_id),
      },
      data: {
        name: name,
        slug: removerAcentos(name)
      }
    })

    return userUpdated;
  }
}

export { UserUpdateNameService }