import prismaClient from "../../prisma";

class UpdateAllNotificationsViewdAdminService {
    async execute() {
        const notificationAdmin = await prismaClient.notificationAdmin.updateMany({
            data: {
                viewed: true
            }
        });

        return notificationAdmin;

    }
}

export { UpdateAllNotificationsViewdAdminService }