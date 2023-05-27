import { Request, Response } from "express";
import { DeleteALLPhotoVariacaoProductService } from "../../../services/variation/photoVariacao/DeleteALLPhotoVariacaoProductService";
import { AllPhotosProductFindService } from "../../../services/variation/photoVariacao/AllPhotosProductFindService"; 
import fs from 'fs';

class DeleteALLPhotoVariacaoProductController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;

        const photosGet = new AllPhotosProductFindService();
        const arrayPhotos = await photosGet.execute({ product_id });

        arrayPhotos.forEach(element => {
            fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + element.photoVariacao);
        });

        const deletePhotoVariacaoService = new DeleteALLPhotoVariacaoProductService();

        const photoVariates = await deletePhotoVariacaoService.execute({
            product_id,
        });

        return res.json([photoVariates, arrayPhotos]);
    }
}

export { DeleteALLPhotoVariacaoProductController };