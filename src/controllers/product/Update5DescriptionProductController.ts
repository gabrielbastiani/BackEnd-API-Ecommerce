import { Request, Response } from 'express';
import { Update5DescriptionProductService } from '../../services/product/Update5DescriptionProductService';

class Update5DescriptionProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id;

    const { descriptionProduct5 } = req.body;

    const updateDescription = new Update5DescriptionProductService();

    const product = await updateDescription.execute({
      product_id,
      descriptionProduct5,
    });

    return res.json(product);
    
  }
}

export { Update5DescriptionProductController }