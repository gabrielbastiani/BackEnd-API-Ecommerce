import prismaClient from "../../../prisma";

interface CustomerRequest {
  customer_id: string;
}

class DeleteCustomerService {
  async execute({ customer_id }: CustomerRequest) {
    const customer = await prismaClient.customer.delete({
      where: {
        id: customer_id
      }
    });

    return customer;
  }

}

export { DeleteCustomerService }