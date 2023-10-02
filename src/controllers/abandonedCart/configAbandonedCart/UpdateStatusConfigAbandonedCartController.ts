import { Request, Response } from 'express'
import { UpdateStatusConfigAbandonedCartService } from '../../../services/abandonedCart/configAbandonedCart/UpdateStatusConfigAbandonedCartService';

class UpdateStatusConfigAbandonedCartController {
    async handle(req: Request, res: Response) {
        const configAbandonedCart_id = req.query.configAbandonedCart_id as string;

        const configs = new UpdateStatusConfigAbandonedCartService();

        const updateStatusConfig = await configs.execute({
            configAbandonedCart_id
        });

        return res.json(updateStatusConfig);

    }
}

export { UpdateStatusConfigAbandonedCartController }