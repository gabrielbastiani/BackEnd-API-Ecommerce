import { Request, Response } from 'express'
import { CreateOrderCommentCustomerService } from '../../../services/order/orderComment/CreateOrderCommentCustomerService';

class CreateOrderCommentCustomerController {
  async handle(req: Request, res: Response) {
    const { comment, order_id, user_comment, active } = req.body;

    const createComments = new CreateOrderCommentCustomerService();

    const commentsOrders = await createComments.execute({
      comment,
      order_id,
      user_comment,
      active
    });

    return res.json(commentsOrders);

  }
}

export { CreateOrderCommentCustomerController }