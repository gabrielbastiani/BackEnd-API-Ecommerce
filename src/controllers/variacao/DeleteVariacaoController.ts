import { Request, Response } from "express";
import { DeleteVariacaoService } from "../../services/variacao/DeleteVariacaoService";
import { DeleteALLPhotoVariacaoService } from "../../services/variacao/photoVariacao/DeleteALLPhotoVariacaoService";
import fs from 'fs';

class DeleteVariacaoController {
  async handle(req: Request, res: Response) {
    const variacao_id = req.query.variacao_id as string;
    const { photoVariacao_id } = req.body;

    const deleteVariacaoService = new DeleteVariacaoService();
    const variacaoPhoto = new DeleteALLPhotoVariacaoService();

    const variacaoDelete = await deleteVariacaoService.execute({
      variacao_id,
      photoVariacao_id
    });

    const variacaoDeletePhoto = await variacaoPhoto.execute({
      photoVariacao_id
    });

    return res.json([variacaoDelete, variacaoDeletePhoto]);
  }
}

export { DeleteVariacaoController };