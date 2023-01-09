import { Request, Response } from 'express';
import { Update3DescriptionProductService } from '../../services/product/Update3DescriptionProductService';

class Update3DescriptionProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id;

    const { descriptionProduct3 } = req.body;

    const updateDescription = new Update3DescriptionProductService();

    const product = await updateDescription.execute({
      product_id,
      descriptionProduct3,
    });

    return res.json(product);
    
  }
}

export { Update3DescriptionProductController }