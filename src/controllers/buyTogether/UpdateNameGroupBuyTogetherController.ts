import { Request, Response } from 'express';
import { UpdateNameGroupBuyTogetherService } from '../../services/buyTogether/UpdateNameGroupBuyTogetherService';

class UpdateNameGroupBuyTogetherController {
  async handle(req: Request, res: Response) {
    const buyTogether_id = req.query.buyTogether_id as string;

    const { nameGroup } = req.body;

    const updateBuy = new UpdateNameGroupBuyTogetherService();

    const buy = await updateBuy.execute({
      buyTogether_id,
      nameGroup
    });

    return res.json(buy);

  }
}

export { UpdateNameGroupBuyTogetherController }