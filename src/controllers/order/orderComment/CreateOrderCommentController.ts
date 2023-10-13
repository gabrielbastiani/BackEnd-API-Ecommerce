import { Request, Response } from 'express'
import { CreateOrderCommentService } from '../../../services/order/orderComment/CreateOrderCommentService';

class CreateOrderCommentController {
  async handle(req: Request, res: Response) {
    const { comment, order_id, user_comment, active } = req.body;

    const createComments = new CreateOrderCommentService();

    const commentsOrders = await createComments.execute({
      comment,
      order_id,
      user_comment,
      active
    });

    return res.json(commentsOrders);

  }
}

export { CreateOrderCommentController }