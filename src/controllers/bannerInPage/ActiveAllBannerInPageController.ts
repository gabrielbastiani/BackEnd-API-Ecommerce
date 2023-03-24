import { Request, Response } from "express";
import { ActiveAllBannerInPageService } from "../../services/bannerInPage/ActiveAllBannerInPageService";

class ActiveAllBannerInPageController {
    async handle(req: Request, res: Response) {
        const listAllBanners = new ActiveAllBannerInPageService();

        const bannersInPage = await listAllBanners.execute();

        return res.json(bannersInPage);

    }
}

export { ActiveAllBannerInPageController }