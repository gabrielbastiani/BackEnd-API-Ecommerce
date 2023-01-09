import { Request, Response } from 'express';
import { Update1DescriptionProductService } from '../../services/product/Update1DescriptionProductService';

class Update1DescriptionProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id;

    const { descriptionProduct1 } = req.body;

    const updateDescription = new Update1DescriptionProductService();

    const product = await updateDescription.execute({
      product_id,
      descriptionProduct1,
    });

    return res.json(product);
    
  }
}

export { Update1DescriptionProductController }