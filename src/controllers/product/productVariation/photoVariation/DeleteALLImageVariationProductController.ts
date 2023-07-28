import { Request, Response } from "express";
import { DeleteALLImageVariationProductService } from "../../../../services/product/productVariation/photoVariation/DeleteALLImageVariationProductService";
import { AllVariationImageService } from "../../../../services/product/productVariation/photoVariation/AllVariationImageService";
import fs from 'fs';

class DeleteALLImageVariationProductController {
    async handle(req: Request, res: Response) {
        const productVariation_id = req.query.productVariation_id as string;

        const photosGet = new AllVariationImageService();
        const arrayPhotos = await photosGet.execute({ productVariation_id });

        arrayPhotos.forEach(element => {
            fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + element.image);
        });

        const deletePhotoVariacaoService = new DeleteALLImageVariationProductService();

        const photoVariates = await deletePhotoVariacaoService.execute({
            productVariation_id,
        });

        return res.json([photoVariates, arrayPhotos]);
    }
}

export { DeleteALLImageVariationProductController };