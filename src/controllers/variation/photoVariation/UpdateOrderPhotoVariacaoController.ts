import { Request, Response } from "express";
import { UpdateOrderPhotoVariacaoService } from "../../../services/variation/photoVariacao/UpdateOrderPhotoVariacaoService";

class UpdateOrderPhotoVariacaoController {
    async handle(req: Request, res: Response) {
        const photoVariacao_id = req.query.photoVariacao_id;

        const { order } = req.body;

        const photoVariacaoService = new UpdateOrderPhotoVariacaoService();

        const photoVariacaoProduct = await photoVariacaoService.execute({
            photoVariacao_id,
            order
        })

        return res.json(photoVariacaoProduct)
        
    }
}

export { UpdateOrderPhotoVariacaoController }