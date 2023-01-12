import { Request, Response } from "express";
import { DeletePhotoVariacaoService } from "../../../services/variacao/photoVariacao/DeletePhotoVariacaoService";

class DeletePhotoVariacaoController {
    async handle(req: Request, res: Response) {
        const photovariacao_id = req.query.photovariacao_id as string;

        const deletePhotoVariacaoService = new DeletePhotoVariacaoService();

        const photo = await deletePhotoVariacaoService.execute({
            photovariacao_id,
        });

        return res.json(photo);
    }
}

export { DeletePhotoVariacaoController };