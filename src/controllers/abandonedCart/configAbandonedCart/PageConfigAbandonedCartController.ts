import { Request, Response } from 'express';
import { PageConfigAbandonedCartService } from '../../../services/abandonedCart/configAbandonedCart/PageConfigAbandonedCartService'; 

class PageConfigAbandonedCartController {
    async handle(req: Request, res: Response) {
        const configs = new PageConfigAbandonedCartService();

        const { page, limit } = req.query;

        const abandonedConfigs = await configs.execute(Number(page), Number(limit));

        return res.json(abandonedConfigs);
    }
}

export { PageConfigAbandonedCartController }