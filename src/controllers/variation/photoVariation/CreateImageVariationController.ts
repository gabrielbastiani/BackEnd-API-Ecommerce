import { Request, Response } from "express";
import { CreateImageVariationService } from "../../../services/variation/photoVariation/CreateImageVariationService";

class CreateImageVariationController {
    async handle(req: Request, res: Response) {
        const { variation_id, order } = req.body;

        const imageVariation = new CreateImageVariationService();

        if (!req.file) {
            throw new Error("error upload file")
        } else {

            const { originalname, filename: image } = req.file;

            const variationImage = await imageVariation.execute({
                image,
                variation_id,
                order
            })
            return res.json(variationImage)
        }

    }
}

export { CreateImageVariationController }