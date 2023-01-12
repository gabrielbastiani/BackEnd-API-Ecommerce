import { Request, Response } from "express";
import { PhotoVariacaoService } from "../../../services/variacao/photoVariacao/PhotoVariacaoService";

class PhotoVariacaoController {
    async handle(req: Request, res: Response) {
        const { variacao_id } = req.body;

        const photoVariacaoService = new PhotoVariacaoService();

        if (!req.file) {
            throw new Error("error upload file")
        } else {

            const { originalname, filename: photoVariacao } = req.file;

            const photoVariacaoProduct = await photoVariacaoService.execute({
                photoVariacao,
                variacao_id
            })
            return res.json(photoVariacaoProduct)
        }

    }
}

export { PhotoVariacaoController }