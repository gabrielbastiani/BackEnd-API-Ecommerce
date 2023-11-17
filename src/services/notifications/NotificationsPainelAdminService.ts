import prismaClient from "../../prisma";

class NotificationsPainelAdminService {
    async execute() {

        const notificationAdmin = await prismaClient.notificationAdmin.findMany({
            where: {
                viewed: false
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        return notificationAdmin;

    }
}

export { NotificationsPainelAdminService }