import prismaClient from '../../../../prisma';

interface DeliveryRequest {
  customer_id: string;
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
    const delivery = await prismaClient.deliveryAddressCustomer.create({
      data: {
        customer_id: customer_id,
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