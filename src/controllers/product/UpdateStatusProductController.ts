import { Request, Response } from 'express'
import { UpdateStatusProductService } from '../../services/product/UpdateStatusProductService'

class UpdateStatusProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id as string;

    const ststusProduct = new UpdateStatusProductService();

    const product = await ststusProduct.execute({
      product_id
    });

    return res.json(product);

  }
}

export { UpdateStatusProductController }