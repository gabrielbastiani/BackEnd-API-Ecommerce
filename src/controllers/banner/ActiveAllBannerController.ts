import { Request, Response } from "express";
import { ActiveAllBannerService } from "../../services/banners/ActiveAllBannerService";

class ActiveAllBannerController {
    async handle(req: Request, res: Response) {
        const slugPosition = req.query.slugPosition as string;
        
        const listAllBanners = new ActiveAllBannerService();

        const banners = await listAllBanners.execute({ slugPosition });

        return res.json(banners);

    }
}

export { ActiveAllBannerController }