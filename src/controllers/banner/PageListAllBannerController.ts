import { Request, Response } from 'express';
import { PageListAllBannerService } from '../../services/banners/PageListAllBannerService';

class PageListAllBannerController {
    async handle(req: Request, res: Response) {
        const pageListBanners = new PageListAllBannerService();

        const { page, limit } = req.query;

        const banners = await pageListBanners.execute(Number(page), Number(limit));

        return res.json(banners);
    }
}

export { PageListAllBannerController }