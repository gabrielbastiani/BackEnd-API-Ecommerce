import { Request, Response } from 'express';
import { UpdateNotificationsViewdAdminService } from '../../services/notifications/UpdateNotificationsViewdAdminService';

class UpdateNotificationsViewdAdminController {
    async handle(req: Request, res: Response) {
        
        const notificationAdmin_id = req.query.notificationAdmin_id as string;

        const listNotifications = new UpdateNotificationsViewdAdminService();
        const notification = await listNotifications.execute({notificationAdmin_id});

        return res.json(notification);
    }
}

export { UpdateNotificationsViewdAdminController }