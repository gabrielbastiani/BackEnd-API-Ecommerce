import { Request, Response } from 'express';
import { UpdateOrderTextoInstitucionalService } from '../../../services/loja/textoInstitucional/UpdateOrderTextoInstitucionalService';

class UpdateOrderTextoInstitucionalController {
  async handle(req: Request, res: Response) {
    const { textoinstitucional_id } = req.query;

    const { order } = req.body;

    const updateOrder = new UpdateOrderTextoInstitucionalService();

    const loja = await updateOrder.execute({
      textoinstitucional_id,
      order,
    });

    return res.json(loja);

  }
}

export { UpdateOrderTextoInstitucionalController }