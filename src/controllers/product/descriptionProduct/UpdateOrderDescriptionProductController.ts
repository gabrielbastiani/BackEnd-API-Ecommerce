import { Request, Response } from 'express';
import { UpdateOrderDescriptionProductService } from '../../../services/product/descriptionProduct/UpdateOrderDescriptionProductService';

class UpdateOrderDescriptionProductController {
  async handle(req: Request, res: Response) {
    const descriptionProduct_id = req.query.descriptionProduct_id as string;

    const { order } = req.body;

    const updateDescription = new UpdateOrderDescriptionProductService();

    const updateOrder = await updateDescription.execute({
      descriptionProduct_id,
      order,
    });

    return res.json(updateOrder);

  }
}

export { UpdateOrderDescriptionProductController }