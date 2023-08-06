import { Request, Response } from 'express';
import { UpdateAllDataConditionalCuponService } from '../../../services/coupon/cuponConditional/UpdateAllDataConditionalCuponService';

class UpdateAllDataConditionalCuponController {
    async handle(req: Request, res: Response) {
        const couponConditional_id = req.query.couponConditional_id as string;
        const { conditional, value } = req.body;

        const updaDataConditional = new UpdateAllDataConditionalCuponService();

        const updateCupon = await updaDataConditional.execute({
            couponConditional_id,
            conditional,
            value
        });

        return res.json(updateCupon);

    }
}

export { UpdateAllDataConditionalCuponController }