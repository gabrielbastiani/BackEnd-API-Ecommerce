import { Request, Response } from "express";
import { CreateProductVariationService } from "../../../services/product/productVariation/CreateProductVariationService";

class CreateProductVariationController {
    async handle(req: Request, res: Response) {
        const {
            product_id,
            variationName,
            variationProduct,
            order,
            store_id
        } = req.body;

        const createVariation = new CreateProductVariationService();

        const variation = await createVariation.execute({
            product_id,
            variationName,
            variationProduct,
            order,
            store_id
        })

        return res.json(variation)

    }
}

export { CreateProductVariationController }