import { Request, Response } from 'express';
import { ActiveProgramedCupomService } from '../../services/coupon/ActiveProgramedCupomService';

class ActiveProgramedCupomController {
    async handle(req: Request, res: Response) {
        const cupon_id = req.query.cupon_id as string;
        const { startDate, endDate } = req.body;

        const alldatepublished = new ActiveProgramedCupomService();

        const cupoms = await alldatepublished.execute({
            cupon_id,
            startDate,
            endDate
        });

        return res.json(cupoms);
    }
}

export { ActiveProgramedCupomController }