import { Request, Response } from 'express';
import { UpdateProductBuyTogetherService } from '../../services/buyTogether/UpdateProductBuyTogetherService';

class UpdateProductBuyTogetherController {
  async handle(req: Request, res: Response) {
    const buyTogether_id = req.query.buyTogether_id as string;

    const { product_id } = req.body;

    const updateBuy = new UpdateProductBuyTogetherService();

    const buy = await updateBuy.execute({
      buyTogether_id,
      product_id
    });

    return res.json(buy);

  }
}

export { UpdateProductBuyTogetherController }