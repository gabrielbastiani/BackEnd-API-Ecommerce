import { Request, Response } from "express";
import { DeleteImageVariationService } from "../../../services/variation/photoVariation/DeleteImageVariationService";
import fs from 'fs';

class DeleteImageVariationController {
    async handle(req: Request, res: Response) {
        const photoVariation_id = req.query.photoVariation_id as string;

        const deleteImage = new DeleteImageVariationService();

        const imageVariant = await deleteImage.execute({
            photoVariation_id,
        });

        fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + imageVariant.image);

        return res.json(imageVariant);
    }
}

export { DeleteImageVariationController };