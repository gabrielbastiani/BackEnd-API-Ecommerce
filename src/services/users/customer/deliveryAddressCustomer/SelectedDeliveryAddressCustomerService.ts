import { SelectedDelivery } from "@prisma/client";
import prismaClient from "../../../../prisma";

interface DeliveryRequest {
    customer_id: string;
}

class SelectedDeliveryAddressCustomerService {
    async execute({ customer_id }: DeliveryRequest) {
        const deliverys = await prismaClient.deliveryAddressCustomer.findFirst({
            where: {
                customer_id: customer_id,
                deliverySelected: SelectedDelivery.Sim
            }
        });

        return deliverys;
    }
}

export { SelectedDeliveryAddressCustomerService }