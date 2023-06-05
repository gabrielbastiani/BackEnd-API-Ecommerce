import { Request, Response } from 'express';
import { DeleteGroupBuyTogetherService } from '../../services/buyTogether/DeleteGroupBuyTogetherService';

class DeleteGroupBuyTogetherController {
  async handle(req: Request, res: Response) {
    const buyTogether_id = req.query.buyTogether_id as string;

    const deleteBuy = new DeleteGroupBuyTogetherService();

    const buy = await deleteBuy.execute({
      buyTogether_id
    });

    return res.json(buy);

  }
}

export { DeleteGroupBuyTogetherController }