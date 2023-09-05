import { SelectedDelivery } from '@prisma/client';
import prismaClient from '../../../../prisma';

interface DeliveryRequest {
  deliveryAddressCustomer_id: string;
  customer_id: string;
}

class UpdateDeliveryAddressCustomerService {
  async execute({ customer_id, deliveryAddressCustomer_id }: DeliveryRequest) {

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

    const delivery = await prismaClient.deliveryAddressCustomer.update({
      where: {
        id: deliveryAddressCustomer_id
      },
      data: {
        deliverySelected: SelectedDelivery.Sim
      }
    });

    return delivery;

  }
}

export { UpdateDeliveryAddressCustomerService }