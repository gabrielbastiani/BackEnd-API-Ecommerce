import { Request, Response } from 'express';
import { PageNotificationsService } from '../../services/notifications/PageNotificationsService'; 

class PageNotificationsController {
    async handle(req: Request, res: Response) {
        const PageNotifications = new PageNotificationsService();

        const { page, limit } = req.query;

        const notificationsPage = await PageNotifications.execute(Number(page), Number(limit));

        return res.json(notificationsPage);
    }
}

export { PageNotificationsController }