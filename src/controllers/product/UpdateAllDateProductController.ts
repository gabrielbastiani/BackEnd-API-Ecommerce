import { Request, Response } from 'express';
import { UpdateAllDateProductService } from '../../services/product/UpdateAllDateProductService';

class UpdateAllDateProductController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;

        const {
            order,
            descriptionProduct1,
            descriptionProduct2,
            descriptionProduct3,
            descriptionProduct4,
            descriptionProduct5,
            descriptionProduct6,
            preco,
            promocao,
            sku,
            category_id,
            loja_id,
        } = req.body;

        const updateDataProduct = new UpdateAllDateProductService();

        const productUpdate = await updateDataProduct.execute({
            product_id,
            order,
            descriptionProduct1,
            descriptionProduct2,
            descriptionProduct3,
            descriptionProduct4,
            descriptionProduct5,
            descriptionProduct6,
            preco,
            promocao,
            sku,
            category_id,
            loja_id,
        });

        return res.json(productUpdate);

    }
}

export { UpdateAllDateProductController }