import { Request, Response } from 'express';
import { FindBuyTogetherIDService } from '../../services/buyTogether/FindBuyTogetherIDService';

class FindBuyTogetherIDController {
  async handle(req: Request, res: Response) {
    const parentId = req.query.parentId as string;

    const findBuy = new FindBuyTogetherIDService();

    const buy = await findBuy.execute({
      parentId
    });

    return res.json(buy);

  }
}

export { FindBuyTogetherIDController }