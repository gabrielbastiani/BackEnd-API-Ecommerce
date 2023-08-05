import { Request, Response } from 'express'
import { StatusCuponService } from '../../services/coupon/StatusCuponService';

class StatusCuponController {
    async handle(req: Request, res: Response) {
        const cupon_id = req.query.cupon_id as string;

        const cupoms = new StatusCuponService();

        const statusCupon = await cupoms.execute({
            cupon_id
        });

        return res.json(statusCupon);

    }
}

export { StatusCuponController }