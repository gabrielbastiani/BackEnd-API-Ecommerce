import prismaClient from "../../../prisma";

interface CustomerRequest {
  customer_id: string;
}

class DetailCustomerService {
  async execute({ customer_id }: CustomerRequest) {
    const customer = await prismaClient.customer.findFirst({
      where: {
        id: customer_id
      },
      include: {
        avalietions: true,
        deliveryaddresscustomers: true,
        store: true
      }
    })

    return customer;
  }
}

export { DetailCustomerService }