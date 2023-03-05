import { Request, Response } from "express";
import { PhotoVariacaoService } from "../../../services/variacao/photoVariacao/PhotoVariacaoService";

class PhotoVariacaoController {
    async handle(req: Request, res: Response) {
        const { variacao_id, product_id } = req.body;

        const photoVariacaoService = new PhotoVariacaoService();

        if (!req.files) {
            throw new Error("error upload file")
        } else {
            /* @ts-ignore */
            const { originalname, filename: photoVariacao } = req.files;

            const photoVariacaoProduct = await photoVariacaoService.execute({
                photoVariacao,
                variacao_id,
                product_id
            })
            return res.json(photoVariacaoProduct)
        }

    }
}

export { PhotoVariacaoController }