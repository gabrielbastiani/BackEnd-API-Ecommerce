import { Request, Response } from 'express';
import { NotificationsConfigsService } from '../../services/notifications/NotificationsConfigsService';

class NotificationsConfigsController {
    async handle(req: Request, res: Response) {
        const listNotifications = new NotificationsConfigsService();
        const notification = await listNotifications.execute();

        return res.json(notification);
    }
}

export { NotificationsConfigsController }