import { Request, Response } from 'express';
import { UpdateStatusBuyTogetherService } from '../../services/buyTogether/UpdateStatusBuyTogetherService';

class UpdateStatusBuyTogetherController {
  async handle(req: Request, res: Response) {
    const buyTogether_id = req.query.buyTogether_id as string;

    const updateBuy = new UpdateStatusBuyTogetherService();

    const buy = await updateBuy.execute({
      buyTogether_id
    });

    return res.json(buy);

  }
}

export { UpdateStatusBuyTogetherController }