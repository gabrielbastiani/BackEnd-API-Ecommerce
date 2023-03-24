import { Request, Response } from 'express'
import { StatusBannerInPageService } from '../../services/bannerInPage/StatusBannerInPageService'

class StatusBannerInPageController {
    async handle(req: Request, res: Response) {
        const bannerInPage_id = req.query.bannerInPage_id as string;

        const inPageBanners = new StatusBannerInPageService();

        const pagesBanners = await inPageBanners.execute({
            bannerInPage_id
        });

        return res.json(pagesBanners);

    }
}

export { StatusBannerInPageController }