import { Request, Response } from 'express'
import { StatusBannerMosaicoService } from '../../services/bannerMosaico/StatusBannerMosaicoService'

class StatusBannerMosaicoController {
    async handle(req: Request, res: Response) {
        const bannerMosaico_id = req.query.bannerMosaico_id as string;

        const mosaicoBanners = new StatusBannerMosaicoService();

        const bannersMosaico = await mosaicoBanners.execute({
            bannerMosaico_id
        });

        return res.json(bannersMosaico);

    }
}

export { StatusBannerMosaicoController }