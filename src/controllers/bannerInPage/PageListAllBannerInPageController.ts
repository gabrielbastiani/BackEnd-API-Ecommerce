import { Request, Response } from 'express';
import { PageListAllBannerInPageService } from '../../services/bannerInPage/PageListAllBannerInPageService';

class PageListAllBannerInPageController {
    async handle(req: Request, res: Response) {
        const inPageBanners = new PageListAllBannerInPageService();

        const { page, limit } = req.query;

        const pageBanners = await inPageBanners.execute(Number(page), Number(limit));

        return res.json(pageBanners);
    }
}

export { PageListAllBannerInPageController }