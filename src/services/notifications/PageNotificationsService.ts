import prismaClient from '../../prisma';

class PageNotificationsService {
    async execute(page = 1, limit = 15) {

        const skip = limit * (page - 1);

        const allNotifications = await prismaClient.notificationAdmin.findMany({
            orderBy: {
                created_at: 'desc'
            }
        });

        const notifications = await prismaClient.notificationAdmin.findMany({
            orderBy: {
                created_at: 'desc'
            },
            skip,
            take: limit
        });

        const data = {
            notifications,
            total: allNotifications.length,
            total_pages: Math.ceil(allNotifications.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageNotificationsService }