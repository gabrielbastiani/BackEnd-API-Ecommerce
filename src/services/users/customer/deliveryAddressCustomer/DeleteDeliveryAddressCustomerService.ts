import prismaClient from "../../../../prisma";

interface DeliveryRequest {
  deliveryAddressCustomer_id: string;
}

class DeleteDeliveryAddressCustomerService {
  async execute({ deliveryAddressCustomer_id }: DeliveryRequest) {
    const delivery = await prismaClient.deliveryAddressCustomer.delete({
      where: {
        id: deliveryAddressCustomer_id
      }
    });

    return delivery;
  }

}

export { DeleteDeliveryAddressCustomerService }