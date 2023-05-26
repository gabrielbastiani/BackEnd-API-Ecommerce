import { Request, Response } from "express";
import { CreatePhotoProductService } from "../../../services/product/photoProduct/CreatePhotoProductService";

class CreatePhotoProductController {
    async handle(req: Request, res: Response) {
        const { product_id, order } = req.body;

        const photoProductService = new CreatePhotoProductService();

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

export { CreatePhotoProductController }