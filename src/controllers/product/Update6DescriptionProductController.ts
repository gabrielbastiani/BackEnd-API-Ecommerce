import { Request, Response } from 'express';
import { Update6DescriptionProductService } from '../../services/product/Update6DescriptionProductService';

class Update6DescriptionProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id;

    const { descriptionProduct6 } = req.body;

    const updateDescription = new Update6DescriptionProductService();

    const product = await updateDescription.execute({
      product_id,
      descriptionProduct6,
    });

    return res.json(product);
    
  }
}

export { Update6DescriptionProductController }