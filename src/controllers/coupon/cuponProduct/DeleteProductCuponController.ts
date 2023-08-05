import { Request, Response } from 'express';
import { DeleteProductCuponService } from '../../../services/coupon/cuponProduct/DeleteProductCuponService';

class DeleteProductCuponController {
  async handle(req: Request, res: Response) {
    const cuponProduct_id = req.query.cuponProduct_id as string;

    const deleteCupon = new DeleteProductCuponService();

    const cupons = await deleteCupon.execute({
      cuponProduct_id
    })

    return res.json(cupons);

  }
}

export { DeleteProductCuponController }