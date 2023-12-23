import { Request, Response } from 'express';
import { UpdatePriceProductService } from '../../services/product/UpdatePriceProductService';

class UpdatePriceProductController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;

        const { price } = req.body;

        const updateDataProduct = new UpdatePriceProductService();

        const productUpdate = await updateDataProduct.execute({
            product_id,
            price
        });

        return res.json(productUpdate);

    }
}

export { UpdatePriceProductController }