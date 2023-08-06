import { Request, Response } from "express";
import { AllConditionalCuponService } from "../../../services/coupon/cuponConditional/AllConditionalCuponService";

class AllConditionalCuponController {
  async handle(req: Request, res: Response) {
    const cupon_id = req.query.cupon_id as string;

    const cupom = new AllConditionalCuponService();

    const allConditional = await cupom.execute({ cupon_id });

    return res.json(allConditional);
  }
}

export { AllConditionalCuponController };