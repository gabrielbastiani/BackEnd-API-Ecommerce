import { Request, Response } from "express";
import { CreateBannerInPageService } from "../../services/bannerInPage/CreateBannerInPageService";

class CreateBannerInPageController {
    async handle(req: Request, res: Response) {
        const { url } = req.body;
        const pageInBanner = new CreateBannerInPageService();

        if (!req.file) {
            throw new Error("error upload file")
        } else {

            const { originalname, filename: bannerPage } = req.file;

            const inPageBanners = await pageInBanner.execute({
                bannerPage,
                url
            })
            return res.json(inPageBanners)
        }

    }
}

export { CreateBannerInPageController }