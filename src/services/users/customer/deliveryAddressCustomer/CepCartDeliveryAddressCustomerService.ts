import { SelectedDelivery } from '@prisma/client';
import prismaClient from '../../../../prisma';

interface DeliveryRequest {
  cep: string;
  customer_id: string;
}

class CepCartDeliveryAddressCustomerService {
  async execute({ customer_id, cep }: DeliveryRequest) {

    const selected = await prismaClient.deliveryAddressCustomer.findFirst({
      where: {
        customer_id: customer_id,
        deliverySelected: SelectedDelivery.Sim,
      },
      orderBy: {
        created_at: 'desc'
      }
    });

    await prismaClient.deliveryAddressCustomer.update({
      where: {
        id: selected.id
      },
      data: {
        deliverySelected: SelectedDelivery.Nao
      }
    });

    const delivery = await prismaClient.deliveryAddressCustomer.updateMany({
      where: {
        customer_id: customer_id,
        cep: cep
      },
      data: {
        deliverySelected: SelectedDelivery.Sim
      }
    });

    return delivery;

  }
}

export { CepCartDeliveryAddressCustomerService }