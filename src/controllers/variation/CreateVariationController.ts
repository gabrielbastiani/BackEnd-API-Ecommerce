import { Request, Response } from "express";
import { CreateVariationService } from "../../services/variation/CreateVariationService";

class CreateVariationController {
    async handle(req: Request, res: Response) {
        const {
            product_id,
            name,
            slug,
            order,
            store_id
        } = req.body;

        const createVariation = new CreateVariationService();

        const variation = await createVariation.execute({
            product_id,
            name,
            slug,
            order,
            store_id
        })

        return res.json(variation)

    }
}

export { CreateVariationController }