import { Request, Response } from 'express';
import { NotificationsPainelCustomerService } from '../../services/notifications/NotificationsPainelCustomerService';

class NotificationsPainelCustomerController {
    async handle(req: Request, res: Response) {
        const customer_id = req.query.customer_id as string;
        const listNotifications = new NotificationsPainelCustomerService();
        const notification = await listNotifications.execute({ customer_id });

        return res.json(notification);
    }
}

export { NotificationsPainelCustomerController }