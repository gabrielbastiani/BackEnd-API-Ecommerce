import { Request, Response } from "express";
import { PhotoProductService } from "../../../services/product/photoproduct/PhotoProductService";

class PhotoProductController {
    async handle(req: Request, res: Response) {
        const { product_id, order } = req.body;

        const photoProductService = new PhotoProductService();

        if (!req.file) {
            throw new Error("error upload file")
        } else {

            const { originalname, filename: photo } = req.file;

            const photoProducts = await photoProductService.execute({
                photo,
                product_id,
                order
            })
            return res.json(photoProducts)
        }

    }
}

export { PhotoProductController }