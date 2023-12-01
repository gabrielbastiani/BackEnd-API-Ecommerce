import prismaClient from "../../prisma";

interface NotificationRequest {
    customer_id: string;
}

class UpdateAllNotificationsViewdCustomerService {
    async execute({ customer_id }: NotificationRequest) {
        const notificationCustomer = await prismaClient.notificationCustomer.updateMany({
            where: {
                customer_id: customer_id
            },
            data: {
                viewed: true
            }
        });

        return notificationCustomer;

    }
}

export { UpdateAllNotificationsViewdCustomerService }