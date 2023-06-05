import { Request, Response } from 'express';
import { DeleteBuyTogetherAllProductService } from '../../services/buyTogether/DeleteBuyTogetherAllProductService';

class DeleteBuyTogetherAllProductController {
  async handle(req: Request, res: Response) {
    const parentId = req.query.parentId as string;

    const deleteBuy = new DeleteBuyTogetherAllProductService();

    const buy = await deleteBuy.execute({
      parentId
    });

    return res.json(buy);

  }
}

export { DeleteBuyTogetherAllProductController }