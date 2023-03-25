import { Request, Response } from 'express';
import { ListExactBannerHomeService } from '../../services/bannerHome/ListExactBannerHomeService';

class ListExactBannerHomeController {
    async handle(req: Request, res: Response) {
        const { bannerHome_id } = req.query;
        const exactBanner = new ListExactBannerHomeService();
        const homeBanner = await exactBanner.execute({ bannerHome_id });

        return res.json(homeBanner);
    }
}

export { ListExactBannerHomeController }