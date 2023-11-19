import prismaClient from "../../prisma";

class ClearAllNotificationsAdminService {
    async execute() {
        const notificationAdmin = await prismaClient.notificationAdmin.updateMany({
            data: {
                block_bell: false
            }
        });

        return notificationAdmin;

    }
}

export { ClearAllNotificationsAdminService }