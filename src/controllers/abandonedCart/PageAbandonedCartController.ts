import { Request, Response } from 'express';
import { PageAbandonedCartService } from '../../services/abandonedCart/PageAbandonedCartService'; 

class PageAbandonedCartController {
    async handle(req: Request, res: Response) {
        const couponPage = new PageAbandonedCartService();

        const { page, limit } = req.query;

        const coupons = await couponPage.execute(Number(page), Number(limit));

        return res.json(coupons);
    }
}

export { PageAbandonedCartController }