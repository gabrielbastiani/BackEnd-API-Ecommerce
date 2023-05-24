import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
    async handle(req: Request, res: Response) {
        const {
            nameProduct,
            slug,
            posicao,
            slugPosicao,
            order,
            descriptionProduct1,
            descriptionProduct2,
            descriptionProduct3,
            descriptionProduct4,
            descriptionProduct5,
            descriptionProduct6,
            preco,
            sku,
            promocao,
            store_id
        } = req.body;

        const createProductService = new CreateProductService();

        const product = await createProductService.execute({
            nameProduct,
            slug,
            posicao,
            slugPosicao,
            order,
            descriptionProduct1,
            descriptionProduct2,
            descriptionProduct3,
            descriptionProduct4,
            descriptionProduct5,
            descriptionProduct6,
            preco,
            sku,
            promocao,
            store_id
        })

        return res.json(product)

    }
}

export { CreateProductController }