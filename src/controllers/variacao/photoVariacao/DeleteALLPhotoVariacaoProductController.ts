import { Request, Response } from "express";
import { DeleteALLPhotoVariacaoProductService } from "../../../services/variacao/photoVariacao/DeleteALLPhotoVariacaoProductService";

class DeleteALLPhotoVariacaoProductController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;

        const deletePhotoVariacaoService = new DeleteALLPhotoVariacaoProductService();

        const photoVariates = await deletePhotoVariacaoService.execute({
            product_id,
        });

        return res.json(photoVariates);
    }
}

export { DeleteALLPhotoVariacaoProductController };