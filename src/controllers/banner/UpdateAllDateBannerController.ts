import { Request, Response } from 'express';
import { UpdateAllDateBannerService } from '../../services/banners/UpdateAllDateBannerService';

class UpdateAllDateBannerController {
    async handle(req: Request, res: Response) {
        const banner_id = req.query.banner_id;

        const { title } = req.body;
        const { width } = req.body;
        const { height } = req.body;
        const { dateInicio } = req.body;
        const { dateFim } = req.body;
        const { order } = req.body;
        const { url } = req.body;

        const updateAllDateUser = new UpdateAllDateBannerService();

        const updateBanner = await updateAllDateUser.execute({
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