import { Request, Response } from 'express';
import { UpdateDatasConfigAbandonedCartService } from '../../../services/abandonedCart/configAbandonedCart/UpdateDatasConfigAbandonedCartService';

class UpdateDatasConfigAbandonedCartController {
    async handle(req: Request, res: Response) {
        const configAbandonedCart_id = req.query.configAbandonedCart_id as string;

        const {
            time_send_email,
            time_in_hours,
            subject,
            code_cupom
        } = req.body;

        const updateConfigs = new UpdateDatasConfigAbandonedCartService();

        const configs = await updateConfigs.execute({
            configAbandonedCart_id,
            time_send_email,
            time_in_hours,
            subject,
            code_cupom
        });

        return res.json(configs);

    }
}

export { UpdateDatasConfigAbandonedCartController }