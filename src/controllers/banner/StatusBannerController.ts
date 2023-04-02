import { Request, Response } from 'express'
import { StatusBannerService } from '../../services/banners/StatusBannerService'

class StatusBannerController {
    async handle(req: Request, res: Response) {
        const banner_id = req.query.banner_id as string;

        const banners = new StatusBannerService();

        const banner = await banners.execute({
            banner_id
        });

        return res.json(banner);

    }
}

export { StatusBannerController }