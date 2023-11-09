import { Request, Response } from 'express'
import { UpdateCodeTrackingService } from '../../../services/shippingTracking/tracking/UpdateCodeTrackingService'; 

class UpdateCodeTrackingController {
    async handle(req: Request, res: Response) {
        const shippingTracking_id = req.query.shippingTracking_id as string;

        const { code_tracking } = req.body;

        const code = new UpdateCodeTrackingService();

        const updateCode = await code.execute({
            shippingTracking_id,
            code_tracking
        });

        return res.json(updateCode);

    }
}

export { UpdateCodeTrackingController }