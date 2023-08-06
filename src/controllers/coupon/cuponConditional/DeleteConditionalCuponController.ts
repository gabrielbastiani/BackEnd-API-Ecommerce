import { Request, Response } from 'express';
import { DeleteConditionalCuponService } from '../../../services/coupon/cuponConditional/DeleteConditionalCuponService';

class DeleteConditionalCuponController {
  async handle(req: Request, res: Response) {
    const couponConditional_id = req.query.couponConditional_id as string;

    const deleteCupon = new DeleteConditionalCuponService();

    const cupons = await deleteCupon.execute({
      couponConditional_id
    })

    return res.json(cupons);

  }
}

export { DeleteConditionalCuponController }