import { Request, Response } from "express";
import { ActiveAllBannerMosaicoService } from "../../services/bannerMosaico/ActiveAllBannerMosaicoService";

class ActiveAllBannerMosaicoController {
    async handle(req: Request, res: Response) {
        const listAllBanners = new ActiveAllBannerMosaicoService();

        const mosaicoBanners = await listAllBanners.execute();

        return res.json(mosaicoBanners);

    }
}

export { ActiveAllBannerMosaicoController }