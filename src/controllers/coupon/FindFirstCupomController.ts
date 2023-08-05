import { Request, Response } from 'express';
import { FindFirstCupomService } from '../../services/coupon/FindFirstCupomService';

class FindFirstCupomController {
    async handle(req: Request, res: Response) {
        const listFirst = new FindFirstCupomService();
        const cupom = await listFirst.execute();

        return res.json(cupom);
    }
}

export { FindFirstCupomController }