import { Request, Response } from 'express';
import { DeleteBuyTogetherAllProductService } from '../../services/buyTogether/DeleteBuyTogetherAllProductService';

class DeleteBuyTogetherAllProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id as string;

    const deleteBuy = new DeleteBuyTogetherAllProductService();

    const buy = await deleteBuy.execute({
      product_id
    });

    return res.json(buy);

  }
}

export { DeleteBuyTogetherAllProductController }