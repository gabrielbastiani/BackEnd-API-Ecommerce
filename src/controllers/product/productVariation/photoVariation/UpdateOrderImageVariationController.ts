import { Request, Response } from "express";
import { UpdateOrderImageVariationService } from "../../../../services/product/productVariation/photoVariation/UpdateOrderImageVariationService";

class UpdateOrderImageVariationController {
    async handle(req: Request, res: Response) {
        const photoVariation_id = req.query.photoVariation_id as string;

        const { order } = req.body;

        const imageVariation = new UpdateOrderImageVariationService();

        const photoVariacaoProduct = await imageVariation.execute({
            photoVariation_id,
            order
        })

        return res.json(photoVariacaoProduct)

    }
}

export { UpdateOrderImageVariationController }