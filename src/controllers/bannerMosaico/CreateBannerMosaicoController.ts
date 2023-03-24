import { Request, Response } from "express";
import { CreateBannerMosaicoService } from "../../services/bannerMosaico/CreateBannerMosaicoService";

class CreateBannerMosaicoController {
    async handle(req: Request, res: Response) {
        const { url } = req.body;
        const mosaicoBanners = new CreateBannerMosaicoService();

        if (!req.file) {
            throw new Error("error upload file")
        } else {

            const { originalname, filename: bannerMosaico } = req.file;

            const bannersMosaico = await mosaicoBanners.execute({
                bannerMosaico,
                url
            })
            return res.json(bannersMosaico)
        }

    }
}

export { CreateBannerMosaicoController }