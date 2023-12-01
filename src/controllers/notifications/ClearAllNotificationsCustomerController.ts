import { Request, Response } from 'express';
import { ClearAllNotificationsCustomerService } from '../../services/notifications/ClearAllNotificationsCustomerService';

class ClearAllNotificationsCustomerController {
    async handle(req: Request, res: Response) {

        const customer_id = req.query.customer_id as string;

        const listNotifications = new ClearAllNotificationsCustomerService();
        const notification = await listNotifications.execute({ customer_id });

        return res.json(notification);
    }
}

export { ClearAllNotificationsCustomerController }