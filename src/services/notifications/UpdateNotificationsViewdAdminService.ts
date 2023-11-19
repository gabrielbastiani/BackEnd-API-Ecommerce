import prismaClient from "../../prisma";

interface NotificationRequest {
    notificationAdmin_id: string;
}

class UpdateNotificationsViewdAdminService {
    async execute({ notificationAdmin_id }: NotificationRequest) {

        const notificationAdmin = await prismaClient.notificationAdmin.update({
            where: {
                id: notificationAdmin_id
            },
            data: {
                viewed: true
            }
        });

        return notificationAdmin;

    }
}

export { UpdateNotificationsViewdAdminService }