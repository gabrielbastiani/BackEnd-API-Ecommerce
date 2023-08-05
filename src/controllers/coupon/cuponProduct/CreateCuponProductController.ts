import { Request, Response } from "express";
import { CreateCuponProductService } from "../../../services/coupon/cuponProduct/CreateCuponProductService";

class CreateCuponProductController {
    async handle(req: Request, res: Response) {
        const {
            cupon_id,
            product_id
        } = req.body;

        const cuopon = new CreateCuponProductService();

        const createCoupon = await cuopon.execute({
            cupon_id,
            product_id
        });

        return res.json(createCoupon);

    }
}

export { CreateCuponProductController }