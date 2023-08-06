import { Request, Response } from "express";
import { FindUniqueConditionalCuponService } from "../../../services/coupon/cuponConditional/FindUniqueConditionalCuponService";

class FindUniqueConditionalCuponController {
  async handle(req: Request, res: Response) {
    const couponConditional_id = req.query.couponConditional_id as string;

    const cupom = new FindUniqueConditionalCuponService();

    const cupomUnique = await cupom.execute({ couponConditional_id });

    return res.json(cupomUnique);
  }
}

export { FindUniqueConditionalCuponController };