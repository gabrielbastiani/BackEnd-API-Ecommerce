import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
    async handle(req: Request, res: Response) {
        const {
            nameProduct,
            descriptionProduct1,
            descriptionProduct2,
            descriptionProduct3,
            descriptionProduct4,
            descriptionProduct5,
            descriptionProduct6,
            price,
            sku,
            estoque,
            pesoKG,
            larguraCM,
            alturaCM,
            profundidadeCM,
            disponibilidade,
            promocao,
            category_id,
            loja_id
        } = req.body;

        const createProductService = new CreateProductService();

        const product = await createProductService.execute({
            nameProduct,
            descriptionProduct1,
            descriptionProduct2,
            descriptionProduct3,
            descriptionProduct4,
            descriptionProduct5,
            descriptionProduct6,
            price,
            sku,
            estoque,
            pesoKG,
            larguraCM,
            alturaCM,
            profundidadeCM,
            disponibilidade,
            promocao,
            category_id,
            loja_id
        })

        return res.json(product)

    }
}

export { CreateProductController }