import { Request, Response } from "express";
import { CreateBannerService } from "../../services/banners/CreateBannerService";

class CreateBannerController {
    async handle(req: Request, res: Response) {
        const { url } = req.body;
        const banners = new CreateBannerService();

        if (!req.file) {
            throw new Error("error upload file")
        } else {

            const { originalname, filename: banner } = req.file;

            const bannersCreate = await banners.execute({
                banner,
                url
            })
            return res.json(bannersCreate)
        }

    }
}

export { CreateBannerController }