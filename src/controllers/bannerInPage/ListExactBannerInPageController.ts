import { Request, Response } from 'express';
import { ListExactBannerInPageService } from '../../services/bannerInPage/ListExactBannerInPageService';

class ListExactBannerInPageController {
    async handle(req: Request, res: Response) {
        const { bannerInPage_id } = req.query;
        const exactBanner = new ListExactBannerInPageService();
        const homeBanner = await exactBanner.execute({ bannerInPage_id });

        return res.json(homeBanner);
    }
}

export { ListExactBannerInPageController }