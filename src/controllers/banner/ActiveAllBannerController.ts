import { Request, Response } from "express";
import { ActiveAllBannerService } from "../../services/banners/ActiveAllBannerService";

class ActiveAllBannerController {
    async handle(req: Request, res: Response) {
        const slugPosicao = req.query.slugPosicao as string;
        
        const listAllBanners = new ActiveAllBannerService();

        const banners = await listAllBanners.execute({ slugPosicao });

        return res.json(banners);

    }
}

export { ActiveAllBannerController }