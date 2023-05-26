import { Request, Response } from 'express'
import { UpdateProductEmphasisService } from '../../services/product/UpdateProductEmphasisService'

class UpdateProductEmphasisController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id as string;

    const updateEmphasis = new UpdateProductEmphasisService();

    const product = await updateEmphasis.execute({
      product_id
    });

    return res.json(product);

  }
}

export { UpdateProductEmphasisController }