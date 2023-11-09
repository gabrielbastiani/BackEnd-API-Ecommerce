import { Request, Response } from 'express';
import { FindTrackingService } from '../../../services/shippingTracking/tracking/FindTrackingService';

class FindTrackingController {
    async handle(req: Request, res: Response) {
        const shippingTracking_id = req.query.shippingTracking_id as string;

        const trackink = new FindTrackingService();

        const code = await trackink.execute({ shippingTracking_id });

        return res.json(code);

    }
}

export { FindTrackingController }