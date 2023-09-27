import { Request, Response } from 'express';
import { PageDetailsAbandonedCartService } from '../../services/abandonedCart/PageDetailsAbandonedCartService'; 

class PageDetailsAbandonedCartController {
    async handle(req: Request, res: Response) {
        const couponPage = new PageDetailsAbandonedCartService();

        const { page, limit, created_at } = req.query;

        const coupons = await couponPage.execute(Number(page), Number(limit), String(created_at));

        return res.json(coupons);
    }
}

export { PageDetailsAbandonedCartController }