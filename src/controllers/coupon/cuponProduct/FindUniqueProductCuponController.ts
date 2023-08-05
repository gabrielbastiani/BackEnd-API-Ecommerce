import { Request, Response } from "express";
import { FindUniqueProductCuponService } from "../../../services/coupon/cuponProduct/FindUniqueProductCuponService";

class FindUniqueProductCuponController {
  async handle(req: Request, res: Response) {
    const cuponProduct_id = req.query.cuponProduct_id as string;

    const cupom = new FindUniqueProductCuponService();

    const cupomUnique = await cupom.execute({ cuponProduct_id });

    return res.json(cupomUnique);
  }
}

export { FindUniqueProductCuponController };