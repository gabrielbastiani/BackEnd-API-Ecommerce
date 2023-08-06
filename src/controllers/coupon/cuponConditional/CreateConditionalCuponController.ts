import { Request, Response } from "express";
import { CreateCuponConditionalService } from "../../../services/coupon/cuponConditional/CreateCuponConditionalService";

class CreateConditionalCuponController {
    async handle(req: Request, res: Response) {
        const {
            cupon_id,
            conditional,
            action,
            value
        } = req.body;

        const cuopon = new CreateCuponConditionalService();

        const createCoupon = await cuopon.execute({
            cupon_id,
            conditional,
            action,
            value
        });

        return res.json(createCoupon);

    }
}

export { CreateConditionalCuponController }