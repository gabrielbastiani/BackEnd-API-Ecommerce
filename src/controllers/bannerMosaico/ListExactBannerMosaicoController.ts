import { Request, Response } from 'express';
import { ListExactBannerMosaicoService } from '../../services/bannerMosaico/ListExactBannerMosaicoService';

class ListExactBannerMosaicoController {
    async handle(req: Request, res: Response) {
        const { bannerMosaico_id } = req.query;
        const exactBanner = new ListExactBannerMosaicoService();
        const homeBanner = await exactBanner.execute({ bannerMosaico_id });

        return res.json(homeBanner);
    }
}

export { ListExactBannerMosaicoController }