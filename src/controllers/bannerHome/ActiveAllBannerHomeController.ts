import { Request, Response } from "express";
import { ActiveAllBannerHomeService } from "../../services/bannerHome/ActiveAllBannerHomeService";

class ActiveAllBannerHomeController {
    async handle(req: Request, res: Response) {
        const listAllBanners = new ActiveAllBannerHomeService();

        const homeBanners = await listAllBanners.execute();

        return res.json(homeBanners);

    }
}

export { ActiveAllBannerHomeController }