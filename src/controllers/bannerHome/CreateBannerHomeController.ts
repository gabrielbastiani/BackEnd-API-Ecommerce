import { Request, Response } from "express";
import { CreateBannerHomeService } from "../../services/bannerHome/CreateBannerHomeService";

class CreateBannerHomeController {
    async handle(req: Request, res: Response) {
        const { url } = req.body;
        const bannerHome = new CreateBannerHomeService();

        if (!req.file) {
            throw new Error("error upload file")
        } else {

            const { originalname, filename: banner } = req.file;

            const homeBanners = await bannerHome.execute({
                banner,
                url
            })
            return res.json(homeBanners)
        }

    }
}

export { CreateBannerHomeController }