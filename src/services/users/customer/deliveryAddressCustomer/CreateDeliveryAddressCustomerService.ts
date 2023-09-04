import { SelectedDelivery } from '@prisma/client';
import prismaClient from '../../../../prisma';

interface DeliveryRequest {
  customer_id: string;
  addressee: string;
  address: string;
  number: string;
  complement: string;
  reference: string;
  neighborhood: string;
  cep: string;
  city: string;
  state: string;
  phone: string;
  store_id: string;
}

class CreateDeliveryAddressCustomerService {
  async execute({
    customer_id,
    addressee,
    address,
    number,
    complement,
    reference,
    neighborhood,
    cep,
    city,
    state,
    phone,
    store_id
  }: DeliveryRequest) {

    const selected = await prismaClient.deliveryAddressCustomer.findFirst({
      where: {
        customer_id: customer_id,
        deliverySelected: SelectedDelivery.Sim,
      },
      orderBy: {
        created_at: 'desc'
      }
    });

    await prismaClient.deliveryAddressCustomer.updateMany({
      where: {
        id: selected.id
      },
      data: {
        deliverySelected: SelectedDelivery.Nao
      }
    });

    const delivery = await prismaClient.deliveryAddressCustomer.create({
      data: {
        customer_id: customer_id,
        addressee: addressee,
        address: address,
        number: number,
        complement: complement,
        reference: reference,
        neighborhood: neighborhood,
        cep: cep,
        city: city,
        state: state,
        phone: phone,
        store_id: store_id
      }
    });

    return delivery;

  }
}

export { CreateDeliveryAddressCustomerService }