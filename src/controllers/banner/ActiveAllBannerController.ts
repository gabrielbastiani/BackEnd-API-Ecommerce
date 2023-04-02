import { Request, Response } from "express";
import { ActiveAllBannerService } from "../../services/banners/ActiveAllBannerService";

class ActiveAllBannerController {
    async handle(req: Request, res: Response) {
        const listAllBanners = new ActiveAllBannerService();

        const banners = await listAllBanners.execute();

        return res.json(banners);

    }
}

export { ActiveAllBannerController }