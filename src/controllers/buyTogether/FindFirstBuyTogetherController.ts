import { Request, Response } from 'express';
import { FindFirstBuyTogetherService } from '../../services/buyTogether/FindFirstBuyTogetherService';

class FindFirstBuyTogetherController {
  async handle(req: Request, res: Response) {
    const buyTogether_id = req.query.buyTogether_id as string;

    const findBuy = new FindFirstBuyTogetherService();

    const buy = await findBuy.execute({
      buyTogether_id
    });

    return res.json(buy);

  }
}

export { FindFirstBuyTogetherController }