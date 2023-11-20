import { Request, Response } from 'express'
import { StockCupomService } from '../../services/coupon/StockCupomService';

class StockCupomController {
    async handle(req: Request, res: Response) {
        const code = req.query.code as string;
        const cupoms = new StockCupomService();
        const stockCupom = await cupoms.execute({ code });
        return res.json(stockCupom);
    }
}

export { StockCupomController }