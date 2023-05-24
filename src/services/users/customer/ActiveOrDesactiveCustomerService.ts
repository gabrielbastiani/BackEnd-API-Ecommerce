import prismaClient from "../../../prisma";

interface CustomerRequest {
  customer_id: string;
}

class ActiveOrDesactiveCustomerService {
  async execute({ customer_id }: CustomerRequest) {

    const activeTrue = await prismaClient.customer.findUnique({
      where: {
        id: customer_id
      },
      select: {
        authenticated: true
      }
    })

    const activeFalse = await prismaClient.customer.findUnique({
      where: {
        id: customer_id
      },
      select: {
        authenticated: true
      }
    })

    if (activeTrue.authenticated === true) {
      const isFalse = await prismaClient.customer.update({
        where: {
          id: customer_id
        },
        data: {
          authenticated: false
        }
      })

      return isFalse;
    }

    if (activeFalse.authenticated === false) {
      const isTrue = await prismaClient.customer.update({
        where: {
          id: customer_id
        },
        data: {
          authenticated: true
        }
      })

      return isTrue;

    }

  }
}

export { ActiveOrDesactiveCustomerService }