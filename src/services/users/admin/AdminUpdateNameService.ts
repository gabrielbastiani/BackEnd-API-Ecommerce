import prismaClient from "../../../prisma";

interface AdminRequest {
  admin_id: string;
  slug: string;
  name: string;
}

class AdminUpdateNameService {
  async execute({ admin_id, name }: AdminRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    const adminUpload = await prismaClient.admin.update({
      where: {
        id: admin_id,
      },
      data: {
        name: name,
        slug: removerAcentos(name)
      }
    })

    return adminUpload;
  }
}

export { AdminUpdateNameService }