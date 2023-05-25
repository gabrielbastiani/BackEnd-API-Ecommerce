import { Request, Response } from 'express';
import { UpdateOrderImageStoreService } from '../../../services/store/imageStore/UpdateOrderImageStoreService';

class UpdateOrderImageStoreController {
  async handle(req: Request, res: Response) {
    const imageStore_id = req.query.imageStore_id as string;

    const { order } = req.body;

    const updateOrder = new UpdateOrderImageStoreService();

    const orderUpdate = await updateOrder.execute({
      imageStore_id,
      order
    });

    return res.json(orderUpdate);

  }
}

export { UpdateOrderImageStoreController }