import { Request, Response } from 'express';
import { UpdateAllDescriptionProductService } from '../../services/product/UpdateAllDescriptionProductService';

class UpdateAllDescriptionProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id;

    const { descriptionProduct1 } = req.body;
    const { descriptionProduct2 } = req.body;
    const { descriptionProduct3 } = req.body;
    const { descriptionProduct4 } = req.body;
    const { descriptionProduct5 } = req.body;
    const { descriptionProduct6 } = req.body;

    const updateDescription1 = new UpdateAllDescriptionProductService();

    const product = await updateDescription1.execute({
      product_id,
      descriptionProduct1,
      descriptionProduct2,
      descriptionProduct3,
      descriptionProduct4,
      descriptionProduct5,
      descriptionProduct6
    });

    return res.json(product);
    
  }
}

export { UpdateAllDescriptionProductController }