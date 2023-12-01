import prismaClient from "../../prisma";

interface NotificationRequest {
    notificationCustomer_id: string;
    customer_id: string;
}

class UpdateNotificationsViewdCustomerService {
    async execute({ notificationCustomer_id, customer_id }: NotificationRequest) {

        const notificationCustomer = await prismaClient.notificationCustomer.updateMany({
            where: {
                id: notificationCustomer_id,
                customer_id: customer_id
            },
            data: {
                viewed: true
            }
        });

        return notificationCustomer;

    }
}

export { UpdateNotificationsViewdCustomerService }