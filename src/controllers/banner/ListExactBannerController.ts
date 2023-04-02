import { Request, Response } from 'express';
import { ListExactBannerService } from '../../services/banners/ListExactBannerService';

class ListExactBannerController {
    async handle(req: Request, res: Response) {
        const { banner_id } = req.query;
        const exactBanner = new ListExactBannerService();
        const banners = await exactBanner.execute({ banner_id });

        return res.json(banners);
    }
}

export { ListExactBannerController }