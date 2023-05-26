import { Request, Response } from "express";
import { CreateDescriptionProductService } from "../../../services/product/descriptionProduct/CreateDescriptionProductService";

class CreateDescriptionProductController {
    async handle(req: Request, res: Response) {
        const {
            title,
            product_id,
            description,
            order
        } = req.body;

        const createDescription = new CreateDescriptionProductService();

        const productDescription = await createDescription.execute({
            title,
            product_id,
            description,
            order
        })

        return res.json(productDescription)

    }
}

export { CreateDescriptionProductController }