import { Request, Response } from 'express';
import { PageCuponService } from '../../services/coupon/PageCuponService';

class PageCuponController {
    async handle(req: Request, res: Response) {
        const couponPage = new PageCuponService();

        const { page, limit } = req.query;

        const coupons = await couponPage.execute(Number(page), Number(limit));

        return res.json(coupons);
    }
}

export { PageCuponController }