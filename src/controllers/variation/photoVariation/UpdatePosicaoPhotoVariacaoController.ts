import { Request, Response } from "express";
import { UpdatePosicaoPhotoVariacaoService } from "../../../services/variation/photoVariacao/UpdatePosicaoPhotoVariacaoService";

class UpdatePosicaoPhotoVariacaoController {
    async handle(req: Request, res: Response) {
        const photoVariacao_id = req.query.photoVariacao_id;

        const { posicao, slugPosicao } = req.body;

        const photoVariacaoService = new UpdatePosicaoPhotoVariacaoService();

        const photoVariacaoProduct = await photoVariacaoService.execute({
            photoVariacao_id,
            posicao,
            slugPosicao
        })

        return res.json(photoVariacaoProduct)
        
    }
}

export { UpdatePosicaoPhotoVariacaoController }