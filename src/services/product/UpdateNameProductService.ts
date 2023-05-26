import prismaClient from "../../prisma";

interface ProductRequest {
  product_id: string;
  name: string;
  slug: string;
}

class UpdateNameProductService {
  async execute({ product_id, name }: ProductRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    const updateName = await prismaClient.product.update({
      where: {
        id: product_id
      },
      data: {
        name: name,
        slug: removerAcentos(name)
      }
    })

    return updateName;

  }
}

export { UpdateNameProductService }