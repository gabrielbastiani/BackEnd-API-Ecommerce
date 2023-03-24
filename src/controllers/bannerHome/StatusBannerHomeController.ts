import { Request, Response } from 'express'
import { StatusBannerHomeService } from '../../services/bannerHome/StatusBannerHomeService'

class StatusBannerHomeController {
    async handle(req: Request, res: Response) {
        const bannerHome_id = req.query.bannerHome_id as string;

        const homebanner = new StatusBannerHomeService();

        const bannerHomes = await homebanner.execute({
            bannerHome_id
        });

        return res.json(bannerHomes);

    }
}

export { StatusBannerHomeController }