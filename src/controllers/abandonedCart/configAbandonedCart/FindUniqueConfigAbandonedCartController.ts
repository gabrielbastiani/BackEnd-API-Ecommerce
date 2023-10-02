import { Request, Response } from 'express';
import { FindUniqueConfigAbandonedCartService } from '../../../services/abandonedCart/configAbandonedCart/FindUniqueConfigAbandonedCartService';

class FindUniqueConfigAbandonedCartController {
    async handle(req: Request, res: Response) {
        const configAbandonedCart_id = req.query.configAbandonedCart_id as string;

        const listConfig = new FindUniqueConfigAbandonedCartService();
        const configs = await listConfig.execute({ configAbandonedCart_id });

        return res.json(configs);
    }
}

export { FindUniqueConfigAbandonedCartController }