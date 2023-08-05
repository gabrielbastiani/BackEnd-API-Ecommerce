import { Request, Response } from 'express';
import { UpdateAllDateCuponService } from '../../services/coupon/UpdateAllDateCuponService';

class UpdateAllDateCuponController {
    async handle(req: Request, res: Response) {
        const cupon_id = req.query.cupon_id as string;

        const {
            name,
            description,
            code,
            startDate,
            endDate,
            amountCoupon
        } = req.body;

        const updateAllDataCupons = new UpdateAllDateCuponService();

        const updateCupon = await updateAllDataCupons.execute({
            cupon_id,
            name,
            description,
            code,
            startDate,
            endDate,
            amountCoupon
        });

        return res.json(updateCupon);

    }
}

export { UpdateAllDateCuponController }