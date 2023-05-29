import { Request, Response } from 'express';
import { PublishProgramadBannerService } from '../../services/banners/PublishProgramadBannerService';

class PublishProgramadBannerController {
    async handle(req: Request, res: Response) {
        const banner_id = req.query.banner_id as string;
        const { startDate, endDate } = req.body;

        const alldatepublished = new PublishProgramadBannerService();

        const banners = await alldatepublished.execute({
            banner_id,
            startDate,
            endDate
        });

        return res.json(banners);
    }
}

export { PublishProgramadBannerController }