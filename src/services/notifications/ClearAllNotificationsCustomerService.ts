import prismaClient from "../../prisma";

interface NotificationRequest {
    customer_id: string;
}

class ClearAllNotificationsCustomerService {
    async execute({ customer_id }: NotificationRequest) {
        const notificationCustomer = await prismaClient.notificationCustomer.updateMany({
            where: {
                customer_id: customer_id
            },
            data: {
                block_bell: false
            }
        });

        return notificationCustomer;

    }
}

export { ClearAllNotificationsCustomerService }