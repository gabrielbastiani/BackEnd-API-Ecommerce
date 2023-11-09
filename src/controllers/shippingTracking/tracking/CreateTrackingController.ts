import { Request, Response } from 'express';
import { CreateTrackingService } from '../../../services/shippingTracking/tracking/CreateTrackingService';

class CreateTrackingController {
    async handle(req: Request, res: Response) {

        const { shippingTracking_id, code_tracking, name_transport, status_frete } = req.body;

        const codeCreate = new CreateTrackingService();

        const code = await codeCreate.execute({
            shippingTracking_id,
            code_tracking,
            name_transport,
            status_frete
        });

        return res.json(code);

    }
}

export { CreateTrackingController }