import { Request, Response } from "express";
import { AllProductsCuponService } from "../../../services/coupon/cuponProduct/AllProductsCuponService";

class AllProductsCuponController {
  async handle(req: Request, res: Response) {
    const cupon_id = req.query.cupon_id as string;

    const cupom = new AllProductsCuponService();

    const allProducts = await cupom.execute({ cupon_id });

    return res.json(allProducts);
  }
}

export { AllProductsCuponController };