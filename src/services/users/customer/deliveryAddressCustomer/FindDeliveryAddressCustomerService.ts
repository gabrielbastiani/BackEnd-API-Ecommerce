import prismaClient from "../../../../prisma";

interface DeliveryRequest {
    customer_id: string;
}

class FindDeliveryAddressCustomerService {
    async execute({ customer_id }: DeliveryRequest) {
        const deliverys = await prismaClient.deliveryAddressCustomer.findMany({
            where: {
                customer_id: customer_id,
            },
            include: {
                customer: true
            },
            orderBy: {
                deliverySelected: "asc"
            }
        });

        return deliverys;
    }
}

export { FindDeliveryAddressCustomerService }