import { Request, Response } from 'express';
import { UpdateOrderTextoInstitucionalService } from '../../../services/store/textoInstitucional/UpdateOrderTextoInstitucionalService';

class UpdateOrderTextoInstitucionalController {
  async handle(req: Request, res: Response) {
    const { textoinstitucional_id } = req.query;

    const { order } = req.body;

    const updateOrder = new UpdateOrderTextoInstitucionalService();

    const store = await updateOrder.execute({
      textoinstitucional_id,
      order,
    });

    return res.json(store);

  }
}

export { UpdateOrderTextoInstitucionalController }