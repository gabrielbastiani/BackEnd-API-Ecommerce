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
        orders: {
          orderBy: {
            created_at: 'desc'
          },
          include: {
            orderComments: true,
            shipmentsTrackings: true
          }
        },
        payments: true,
        store: true
      }
    })

    return customer;
  }
}

export { DetailCustomerService }