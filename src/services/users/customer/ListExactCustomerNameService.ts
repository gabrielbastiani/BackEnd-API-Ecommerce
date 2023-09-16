import prismaClient from "../../../prisma";

interface AdminRequest {
  slug: string;
}

class ListExactCustomerNameService {
  async execute({ slug }: AdminRequest) {
    const exactUser = await prismaClient.customer.findFirst({
      where: {
        slug: slug
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
    return exactUser;
  }
}

export { ListExactCustomerNameService }