import { Request, Response } from 'express';
import { UpdateAllNotificationsViewdCustomerService } from '../../services/notifications/UpdateAllNotificationsViewdCustomerService';

class UpdateAllNotificationsViewdCustomerController {
    async handle(req: Request, res: Response) {

        const customer_id = req.query.customer_id as string;

        const listNotifications = new UpdateAllNotificationsViewdCustomerService();
        const notification = await listNotifications.execute({ customer_id });

        return res.json(notification);
    }
}

export { UpdateAllNotificationsViewdCustomerController }