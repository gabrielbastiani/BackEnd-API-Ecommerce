import { Request, Response } from 'express';
import { UpdateOrderInstitutionalTextService } from '../../../services/store/institutionalText/UpdateOrderInstitutionalTextService';

class UpdateOrderInstitutionalTextController {
  async handle(req: Request, res: Response) {
    const institutionalText_id = req.query.institutionalText_id as string;

    const { order } = req.body;

    const updateOrder = new UpdateOrderInstitutionalTextService();

    const text = await updateOrder.execute({
      institutionalText_id,
      order,
    });

    return res.json(text);

  }
}

export { UpdateOrderInstitutionalTextController }