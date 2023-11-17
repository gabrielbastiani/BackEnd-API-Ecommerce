import prismaClient from "../../../prisma";

interface CustomerRequest {
  customer_id: string;
}

class DeleteCustomerService {
  async execute({ customer_id }: CustomerRequest) {

    const store = await prismaClient.store.findFirst();

    const customerName = await prismaClient.customer.findUnique({
      where: {
        id: customer_id
      }
    });

    await prismaClient.notificationAdmin.create({
      data: {
        message: `Cliente <strong>${customerName.name}</strong> foi deletado(a) da loja.`,
        link: `http://localhost:3000/clientes`,
        store_id: store.id
      }
    });

    const customer = await prismaClient.customer.delete({
      where: {
        id: customer_id
      }
    });

    return customer;
  }

}

export { DeleteCustomerService }