import { Request, Response } from "express";
import { PhotoProductService } from "../../../services/product/photoproduct/PhotoProductService";

class PhotoProductController {
    async handle(req: Request, res: Response) {
        const { product_id, order } = req.body;

        const photoProductService = new PhotoProductService();

        if (!req.file) {
            throw new Error("error upload file");
        } else {

            const { originalname, filename: image } = req.file;

            const photoProducts = await photoProductService.execute({
                image,
                product_id,
                order
            })
            return res.json(photoProducts)
        }

    }
}

export { PhotoProductController }