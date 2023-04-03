import { Request, Response } from 'express';
import { UpdateOrderPhotoTextoService } from '../../../../services/loja/textoInstitucional/photoTextoInstitucional/UpdateOrderPhotoTextoService';

class UpdateOrderPhotoTextoController {
  async handle(req: Request, res: Response) {
    const imageloja_id = req.query.imageloja_id;

    const { order } = req.body;

    const updateOrder = new UpdateOrderPhotoTextoService();

    const orderUpdate = await updateOrder.execute({
      imageloja_id,
      order
    });

    return res.json(orderUpdate);

  }
}

export { UpdateOrderPhotoTextoController }