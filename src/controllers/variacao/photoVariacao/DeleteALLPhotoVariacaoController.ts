import { Request, Response } from "express";
import { DeleteALLPhotoVariacaoService } from "../../../services/variacao/photoVariacao/DeleteALLPhotoVariacaoService";
import { AllPhotosService } from "../../../services/variacao/photoVariacao/AllPhotosService";
import fs from 'fs';


class DeleteALLPhotoVariacaoController {
    async handle(req: Request, res: Response) {
        const variacao_id = req.query.variacao_id as string;

        const photosGet = new AllPhotosService();
        const arrayPhotos = await photosGet.execute({ variacao_id });

        arrayPhotos.forEach(element => {
            fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + element.photoVariacao);
        });

        const deletePhotoVariacaoService = new DeleteALLPhotoVariacaoService();

        const photoVariates = await deletePhotoVariacaoService.execute({
            variacao_id,
        });

        return res.json([photoVariates, arrayPhotos]);
    }
}

export { DeleteALLPhotoVariacaoController };