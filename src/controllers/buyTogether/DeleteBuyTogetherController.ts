import { Request, Response } from 'express';
import { DeleteBuyTogetherService } from '../../services/buyTogether/DeleteBuyTogetherService';

class DeleteBuyTogetherController {
  async handle(req: Request, res: Response) {
    const buyTogether_id = req.query.buyTogether_id as string;

    const deleteBuy = new DeleteBuyTogetherService();

    const buy = await deleteBuy.execute({
      buyTogether_id
    });

    return res.json(buy);

  }
}

export { DeleteBuyTogetherController }