import { Request, Response } from 'express';
import { FindUniqueBuyTogetherService } from '../../services/buyTogether/FindUniqueBuyTogetherService';

class FindUniqueBuyTogetherController {
  async handle(req: Request, res: Response) {
    const buyTogether_id = req.query.buyTogether_id as string;

    const findBuy = new FindUniqueBuyTogetherService();

    const buy = await findBuy.execute({
      buyTogether_id
    });

    return res.json(buy);

  }
}

export { FindUniqueBuyTogetherController }