import { Request, Response } from 'express';
import { FindShippingTrackingService } from '../../services/shippingTracking/FindShippingTrackingService';

class FindShippingTrackingController {
    async handle(req: Request, res: Response) {
        const shippingTracking_id = req.query.shippingTracking_id as string;

        const trackink = new FindShippingTrackingService();

        const code = await trackink.execute({ shippingTracking_id });

        return res.json(code);

    }
}

export { FindShippingTrackingController }