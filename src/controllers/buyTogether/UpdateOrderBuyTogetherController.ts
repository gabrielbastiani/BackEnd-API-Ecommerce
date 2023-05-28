import { Request, Response } from 'express';
import { UpdateOrderBuyTogetherService } from '../../services/buyTogether/UpdateOrderBuyTogetherService';

class UpdateOrderBuyTogetherController {
  async handle(req: Request, res: Response) {
    const buyTogether_id = req.query.buyTogether_id as string;

    const { order } = req.body;

    const updateBuy = new UpdateOrderBuyTogetherService();

    const buy = await updateBuy.execute({
      buyTogether_id,
      order
    });

    return res.json(buy);

  }
}

export { UpdateOrderBuyTogetherController }