import { Request, Response } from 'express';
import { DeleteCuponService } from '../../services/coupon/DeleteCuponService';

class DeleteCuponController {
  async handle(req: Request, res: Response) {
    const cupon_id = req.query.cupon_id as string;

    const deleteCupon = new DeleteCuponService();

    const cupons = await deleteCupon.execute({
      cupon_id
    })

    return res.json(cupons);

  }
}

export { DeleteCuponController }