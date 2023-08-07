import { Request, Response } from "express";
import { FindCuponService } from "../../services/coupon/FindCuponService";

class FindCuponController {
  async handle(req: Request, res: Response) {
    const code = req.query.code as string;

    const cupomCode = new FindCuponService();

    const cupomUnique = await cupomCode.execute({ code });

    return res.json(cupomUnique);
  }
}

export { FindCuponController };