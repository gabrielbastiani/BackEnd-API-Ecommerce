import { Request, Response } from 'express';
import { DeleteConfigAbandonedCartService } from '../../../services/abandonedCart/configAbandonedCart/DeleteConfigAbandonedCartService';

class DeleteConfigAbandonedCartController {
  async handle(req: Request, res: Response) {
    const configAbandonedCart_id = req.query.configAbandonedCart_id as string;

    const delteConfig = new DeleteConfigAbandonedCartService();

    const configs = await delteConfig.execute({
      configAbandonedCart_id
    });

    return res.json(configs);

  }
}

export { DeleteConfigAbandonedCartController }