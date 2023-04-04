import { Request, Response } from 'express';
import { UpdateAllDateBannerService } from '../../services/banners/UpdateAllDateBannerService';

class UpdateAllDateBannerController {
    async handle(req: Request, res: Response) {
        const banner_id = req.query.banner_id;

        const {
            title,
            width,
            height,
            dateInicio,
            dateFim,
            order,
            url
        } = req.body;
        
        const updateAllDateBanner = new UpdateAllDateBannerService();

        const updateBanner = await updateAllDateBanner.execute({
            banner_id,
            title,
            width,
            height,
            dateInicio,
            dateFim,
            order,
            url
        });

        return res.json(updateBanner);

    }
}

export { UpdateAllDateBannerController }