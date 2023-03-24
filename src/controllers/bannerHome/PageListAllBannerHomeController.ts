import { Request, Response } from 'express';
import { PageListAllBannerHomeService } from '../../services/bannerHome/PageListAllBannerHomeService';

class PageListAllBannerHomeController {
    async handle(req: Request, res: Response) {
        const pageListBannerHome = new PageListAllBannerHomeService();

        const { page, limit } = req.query;

        const homeBanner = await pageListBannerHome.execute(Number(page), Number(limit));

        return res.json(homeBanner);
    }
}

export { PageListAllBannerHomeController }