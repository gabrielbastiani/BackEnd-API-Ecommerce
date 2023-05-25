import { Request, Response } from 'express';
import { UpdateOrderSocialMediaService } from '../../../services/store/socialMedia/UpdateOrderSocialMediaService';

class UpdateOrderSocialMediaController {
  async handle(req: Request, res: Response) {
    const socialMedia_id = req.query.socialMedia_id as string;

    const { order } = req.body;

    const updateOrder = new UpdateOrderSocialMediaService();

    const store = await updateOrder.execute({
      socialMedia_id,
      order,
    });

    return res.json(store);

  }
}

export { UpdateOrderSocialMediaController }