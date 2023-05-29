import { Request, Response } from "express";
import { CreateBannerService } from "../../services/banners/CreateBannerService";

class CreateBannerController {
    async handle(req: Request, res: Response) {
        const {
            title,
            width,
            height,
            startDate,
            endDate,
            order,
            url,
            position,
            slugPosition
        } = req.body;

        const banners = new CreateBannerService();

        if (!req.file) {
            throw new Error("error upload file");
        } else {

            const { originalname, filename: banner } = req.file;

            const bannersCreate = await banners.execute({
                banner,
                title,
                width,
                height,
                startDate,
                endDate,
                order,
                url,
                position,
                slugPosition
            });

            return res.json(bannersCreate);

        }

    }
}

export { CreateBannerController }