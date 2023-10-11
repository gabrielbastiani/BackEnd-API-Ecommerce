import { Request, Response } from 'express';
import { CreateCodeShippingTrackingService } from '../../services/shippingTracking/CreateCodeShippingTrackingService'; 

class CreateCodeShippingTrackingController {
    async handle(req: Request, res: Response) {
        const shippingTracking_id = req.query.shippingTracking_id as string;

        const { code_tracking } = req.body;

        const codeCreate = new CreateCodeShippingTrackingService();

        const code = await codeCreate.execute({
            shippingTracking_id,
            code_tracking,
        });

        return res.json(code);

    }
}

export { CreateCodeShippingTrackingController }