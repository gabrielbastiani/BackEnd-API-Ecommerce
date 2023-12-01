import prismaClient from "../../prisma";

interface NotificationRequest {
    customer_id: string;
}

class NotificationsPainelCustomerService {
    async execute({ customer_id }: NotificationRequest) {
        const notificationCustomer = await prismaClient.notificationCustomer.findMany({
            where: {
                customer_id: customer_id
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        return notificationCustomer;

    }
}

export { NotificationsPainelCustomerService }