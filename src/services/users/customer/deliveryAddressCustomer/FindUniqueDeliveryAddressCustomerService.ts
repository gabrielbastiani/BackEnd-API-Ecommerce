import prismaClient from "../../../../prisma";

interface DeliveryRequest {
    deliveryAddressCustomer_id: string;
}

class FindUniqueDeliveryAddressCustomerService {
    async execute({ deliveryAddressCustomer_id }: DeliveryRequest) {
        const deliverys = await prismaClient.deliveryAddressCustomer.findUnique({
            where: {
                id: deliveryAddressCustomer_id,
            },
            include: {
                customer: true
            }
        });

        return deliverys;
    }
}

export { FindUniqueDeliveryAddressCustomerService }