import { Request, Response } from 'express';
import { CreateNotificationCommentService } from '../../services/notifications/CreateNotificationCommentService';

class CreateNotificationCommentController {
    async handle(req: Request, res: Response) {
        const customer_id = req.query.customer_id as string;
        const id_order_store = req.query.id_order_store as string;
        const listNotifications = new CreateNotificationCommentService();
        const notification = await listNotifications.execute({ customer_id, id_order_store });

        return res.json(notification);
    }
}

export { CreateNotificationCommentController }