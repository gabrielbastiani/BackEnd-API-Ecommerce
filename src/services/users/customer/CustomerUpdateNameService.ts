import prismaClient from "../../../prisma";

interface CustomerRequest {
  customer_id: string;
  slug: string;
  name: string;
}

class CustomerUpdateNameService {
  async execute({ customer_id, name }: CustomerRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    const customerUpdate = await prismaClient.customer.update({
      where: {
        id: customer_id,
      },
      data: {
        name: name,
        slug: removerAcentos(name)
      }
    });

    return customerUpdate;
  }
}

export { CustomerUpdateNameService }