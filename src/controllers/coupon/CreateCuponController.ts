import { Request, Response } from "express";
import { CreateCuponService } from "../../services/coupon/CreateCuponService";

class CreateCuponController {
    async handle(req: Request, res: Response) {
        const {
            name,
            description,
            startDate,
            endDate,
            code,
            amountCoupon,
            active,
            conditional
        } = req.body;

        const cuopon = new CreateCuponService();

        const createCoupon = await cuopon.execute({
            name,
            description,
            startDate,
            endDate,
            code,
            amountCoupon,
            active,
            conditional
        });

        return res.json(createCoupon);

    }
}

export { CreateCuponController }