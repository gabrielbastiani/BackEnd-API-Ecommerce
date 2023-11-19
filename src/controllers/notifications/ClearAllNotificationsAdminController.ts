import { Request, Response } from 'express';
import { ClearAllNotificationsAdminService } from '../../services/notifications/ClearAllNotificationsAdminService';

class ClearAllNotificationsAdminController {
    async handle(req: Request, res: Response) {

        const listNotifications = new ClearAllNotificationsAdminService();
        const notification = await listNotifications.execute();

        return res.json(notification);
    }
}

export { ClearAllNotificationsAdminController }