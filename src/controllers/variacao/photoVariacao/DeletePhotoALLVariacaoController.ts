/* import { Request, Response } from "express";
import { DeleteALLPhotoVariacaoService } from "../../../services/variacao/photoVariacao/DeleteALLPhotoVariacaoService";
import fs from 'fs';

class DeletePhotoALLVariacaoController {
    async handle(req: Request, res: Response) {
        const variacao_id = req.query.variacao_id as string;

        const deletePhotoVariacaoService = new DeleteALLPhotoVariacaoService();

        const photoVariates = await deletePhotoVariacaoService.execute({
            variacao_id,
        });

        fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + photoVariates.count);

        return res.json(photoVariates);
    }
}

export { DeletePhotoALLVariacaoController }; */