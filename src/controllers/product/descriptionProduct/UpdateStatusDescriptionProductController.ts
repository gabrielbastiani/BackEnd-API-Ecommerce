import { Request, Response } from 'express'
import { UpdateStatusDescriptionProductService } from '../../../services/product/descriptionProduct/UpdateStatusDescriptionProductService';

class UpdateStatusDescriptionProductController {
  async handle(req: Request, res: Response) {
    const descriptionProduct_id = req.query.descriptionProduct_id as string;

    const statusDescription = new UpdateStatusDescriptionProductService();

    const status = await statusDescription.execute({
      descriptionProduct_id
    });

    return res.json(status);

  }
}

export { UpdateStatusDescriptionProductController }