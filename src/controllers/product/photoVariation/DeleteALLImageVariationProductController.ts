import { Request, Response } from "express";
import { DeleteALLImageVariationProductService } from "../../services/productVariation/photoVariation/DeleteALLImageVariationProductService";
import { AllVariationImageService } from "../../services/productVariation/photoVariation/AllVariationImageService";
import fs from 'fs';

class DeleteALLImageVariationProductController {
    async handle(req: Request, res: Response) {
        const variation_id = req.query.variation_id as string;

        const photosGet = new AllVariationImageService();
        const arrayPhotos = await photosGet.execute({ variation_id });

        arrayPhotos.forEach(element => {
            fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + element.image);
        });

        const deletePhotoVariacaoService = new DeleteALLImageVariationProductService();

        const photoVariates = await deletePhotoVariacaoService.execute({
            variation_id,
        });

        return res.json([photoVariates, arrayPhotos]);
    }
}

export { DeleteALLImageVariationProductController };