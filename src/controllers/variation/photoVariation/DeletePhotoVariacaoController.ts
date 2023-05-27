import { Request, Response } from "express";
import { DeletePhotoVariacaoService } from "../../../services/variacao/photoVariacao/DeletePhotoVariacaoService";
import fs from 'fs';

class DeletePhotoVariacaoController {
    async handle(req: Request, res: Response) {
        const photoVariacao_id = req.query.photoVariacao_id as string;

        const deletePhotoVariacaoService = new DeletePhotoVariacaoService();

        const photoVariates = await deletePhotoVariacaoService.execute({
            photoVariacao_id,
        });

        fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + photoVariates.photoVariacao);

        return res.json(photoVariates);
    }
}

export { DeletePhotoVariacaoController };