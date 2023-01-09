import { Request, Response } from 'express';
import { Update4DescriptionProductService } from '../../services/product/Update4DescriptionProductService';

class Update4DescriptionProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id;

    const { descriptionProduct4 } = req.body;

    const updateDescription = new Update4DescriptionProductService();

    const product = await updateDescription.execute({
      product_id,
      descriptionProduct4,
    });

    return res.json(product);
    
  }
}

export { Update4DescriptionProductController }