import { Request, Response } from 'express';
import { UpdateNotificationsViewdCustomerService } from '../../services/notifications/UpdateNotificationsViewdCustomerService';

class UpdateNotificationsViewdCustomerController {
    async handle(req: Request, res: Response) {
        
        const notificationCustomer_id = req.query.notificationCustomer_id as string;
        const customer_id = req.query.customer_id as string;

        const listNotifications = new UpdateNotificationsViewdCustomerService();
        const notification = await listNotifications.execute({ notificationCustomer_id, customer_id });

        return res.json(notification);
    }
}

export { UpdateNotificationsViewdCustomerController }