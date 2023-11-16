import { Request, Response } from 'express';
import { NotificationsPainelAdminService } from '../../services/notifications/NotificationsPainelAdminService';

class NotificationsPainelAdminController {
    async handle(req: Request, res: Response) {
        const listNotifications = new NotificationsPainelAdminService();
        const notification = await listNotifications.execute();

        return res.json(notification);
    }
}

export { NotificationsPainelAdminController }