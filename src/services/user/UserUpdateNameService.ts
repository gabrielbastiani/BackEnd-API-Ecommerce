import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  slug: string;
  nameComplete: string;
}

class UserUpdateNameService {
  async execute({ user_id, slug, nameComplete }: UserRequest) {

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
        id: String(user_id),
      },
      data: {
        nameComplete: nameComplete,
        slug: removerAcentos(nameComplete)
      }
    })

    return userUpdated;
  }
}

export { UserUpdateNameService }