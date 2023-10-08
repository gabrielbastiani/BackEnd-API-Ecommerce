import { Request, Response } from 'express';
import { ClearAllCacheCartsService } from '../../services/cart/ClearAllCacheCartsService';

class ClearAllCacheCartsController {
  async handle(req: Request, res: Response) {

    const clear = new ClearAllCacheCartsService();

    const cart = await clear.execute();

    return res.json(cart);

  }
}

export { ClearAllCacheCartsController }