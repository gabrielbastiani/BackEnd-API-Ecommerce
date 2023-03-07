import { Request, Response } from "express";
import { DeleteALLPhotoVariacaoService } from "../../../services/variacao/photoVariacao/DeleteALLPhotoVariacaoService";
import { DeletePhotoVariacaoService } from "../../../services/variacao/photoVariacao/DeletePhotoVariacaoService";
import fs from 'fs';

class DeleteALLPhotoVariacaoController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;

        const deletePhotoVariacaoService = new DeleteALLPhotoVariacaoService();

        const photoVariates = await deletePhotoVariacaoService.execute({
            product_id,
        });

        const photos = new DeletePhotoVariacaoService();
        /* @ts-ignore */
        const allPhotos = photos.execute({ photoVariacao_id });

        fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + (await allPhotos).photoVariacao);

        return res.json(photoVariates);
    }
}

export { DeleteALLPhotoVariacaoController };