import { Request, Response } from 'express';
import { FindGroupBuyTogetherIDService } from '../../services/buyTogether/FindGroupBuyTogetherIDService';

class FindGroupBuyTogetherIDController {
  async handle(req: Request, res: Response) {
    const parentId = req.query.parentId as string;

    const findBuy = new FindGroupBuyTogetherIDService();

    const buy = await findBuy.execute({
      parentId
    });

    return res.json(buy);

  }
}

export { FindGroupBuyTogetherIDController }