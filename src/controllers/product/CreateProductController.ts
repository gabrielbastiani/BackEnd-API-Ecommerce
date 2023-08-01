import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
    async handle(req: Request, res: Response) {
        const {
            name,
            slug,
            price,
            promotion,
            sku,
            stock,
            weight,
            width,
            height,
            depth,
            reservedAmount,
            urlVideo,
            buyTogether_id,
            store_id
        } = req.body;

        const createProductService = new CreateProductService();

        const product = await createProductService.execute({
            name,
            slug,
            price,
            promotion,
            sku,
            stock,
            weight,
            width,
            height,
            depth,
            reservedAmount,
            urlVideo,
            buyTogether_id,
            store_id
        })

        return res.json(product)

    }
}

export { CreateProductController }