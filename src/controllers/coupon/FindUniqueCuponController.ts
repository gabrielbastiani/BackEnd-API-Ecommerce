import { Request, Response } from "express";
import { FindUniqueCuponService } from "../../services/coupon/FindUniqueCuponService";

class FindUniqueCuponController {
  async handle(req: Request, res: Response) {
    const cupon_id = req.query.cupon_id as string;

    const cupom = new FindUniqueCuponService();

    const cupomUnique = await cupom.execute({ cupon_id });

    return res.json(cupomUnique);
  }
}

export { FindUniqueCuponController };