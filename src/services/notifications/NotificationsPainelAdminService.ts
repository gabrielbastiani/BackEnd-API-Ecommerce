import prismaClient from "../../prisma";

class NotificationsPainelAdminService {
    async execute() {

        const notificationAdmin = await prismaClient.notificationAdmin.findMany();

        return notificationAdmin;

    }
}

export { NotificationsPainelAdminService }