import prismaClient from "../../../prisma";

interface CustomerRequest {
  customer_id: string;
}

class ActiveOrDesactiveCustomerService {
  async execute({ customer_id }: CustomerRequest) {

    const store = await prismaClient.store.findFirst();

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

    const dateCustomer = await prismaClient.customer.findUnique({
      where: {
        id: customer_id
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
      });

      await prismaClient.notificationAdmin.create({
        data: {
          message: `Cliente ${dateCustomer.name} foi ${dateCustomer.authenticated === true ? `<strong>DESATIVADO</strong>` : `<strong>ATIVADO</strong>`} da loja.`,
          store_id: store.id
        }
      });

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
      });

      await prismaClient.notificationAdmin.create({
        data: {
          message: `Cliente ${dateCustomer.name} foi ${dateCustomer.authenticated === true ? `<strong>DESATIVADO</strong>` : `<strong>ATIVADO</strong>`} da loja.`,
          store_id: store.id
        }
      });

      return isTrue;

    }

  }
}

export { ActiveOrDesactiveCustomerService }