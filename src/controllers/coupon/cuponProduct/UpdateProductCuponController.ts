import { Request, Response } from 'express';
import { UpdateProductCuponService } from '../../../services/coupon/cuponProduct/UpdateProductCuponService';

class UpdateProductCuponController {
    async handle(req: Request, res: Response) {
        const cuponProduct_id = req.query.cuponProduct_id as string;
        const { product_id } = req.body;

        const updaProductCupom = new UpdateProductCuponService();

        const updateCupon = await updaProductCupom.execute({
            cuponProduct_id,
            product_id
        });

        return res.json(updateCupon);

    }
}

export { UpdateProductCuponController }