import { Request, Response } from 'express';
import { UpdateAllNotificationsViewdAdminService } from '../../services/notifications/UpdateAllNotificationsViewdAdminService';

class UpdateAllNotificationsViewdAdminController {
    async handle(req: Request, res: Response) {

        const listNotifications = new UpdateAllNotificationsViewdAdminService();
        const notification = await listNotifications.execute();

        return res.json(notification);
    }
}

export { UpdateAllNotificationsViewdAdminController }