import prismaClient from "../../prisma";

interface ProductRequest {
   product_id: any;
   nameProduct: string;
   slug: string;
}

class UpdateNameProductService {
  async execute({ product_id, nameProduct }: ProductRequest){

    function removerAcentos(s: any) {
      return s.normalize('NFD')
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .replace(/ +/g, "-")
          .replace(/-{2,}/g, "-")
          .replace(/[/]/g, "-");
    }

    const updateName = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        nameProduct: nameProduct,
        slug: removerAcentos(nameProduct)
      }
    })

    return updateName;

  }
}

export { UpdateNameProductService }