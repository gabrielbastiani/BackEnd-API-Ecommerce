import { Request, Response } from 'express';
import { Update2DescriptionProductService } from '../../services/product/Update2DescriptionProductService';

class Update2DescriptionProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id;

    const { descriptionProduct2 } = req.body;

    const updateDescription = new Update2DescriptionProductService();

    const product = await updateDescription.execute({
      product_id,
      descriptionProduct2,
    });

    return res.json(product);
    
  }
}

export { Update2DescriptionProductController }