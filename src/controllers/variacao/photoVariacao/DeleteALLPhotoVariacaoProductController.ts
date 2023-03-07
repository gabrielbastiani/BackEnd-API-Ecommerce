import { Request, Response } from "express";
import { DeleteALLPhotoVariacaoProductService } from "../../../services/variacao/photoVariacao/DeleteALLPhotoVariacaoProductService";
import { AllPhotosProductService } from "../../../services/product/photoproduct/AllPhotosProductService";
import fs from 'fs';

class DeleteALLPhotoVariacaoProductController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;

        const photosGet = new AllPhotosProductService();
        const arrayPhotos = await photosGet.execute({ product_id });

        arrayPhotos.forEach(element => {
            fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + element.photo);
        });

        const deletePhotoVariacaoService = new DeleteALLPhotoVariacaoProductService();

        const photoVariates = await deletePhotoVariacaoService.execute({
            product_id,
        });

        return res.json(photoVariates);
    }
}

export { DeleteALLPhotoVariacaoProductController };