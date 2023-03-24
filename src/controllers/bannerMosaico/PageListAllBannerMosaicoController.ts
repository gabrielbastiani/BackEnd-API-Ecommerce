import { Request, Response } from 'express';
import { PageListAllBannerMosaicoService } from '../../services/bannerMosaico/PageListAllBannerMosaicoService';

class PageListAllBannerMosaicoController {
    async handle(req: Request, res: Response) {
        const mosaicoBanners = new PageListAllBannerMosaicoService();

        const { page, limit } = req.query;

        const bannersMosaico = await mosaicoBanners.execute(Number(page), Number(limit));

        return res.json(bannersMosaico);
    }
}

export { PageListAllBannerMosaicoController }