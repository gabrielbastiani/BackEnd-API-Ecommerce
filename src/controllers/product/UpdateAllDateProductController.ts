import { Request, Response } from 'express';
import { UpdateAllDateProductService } from '../../services/product/UpdateAllDateProductService';

class UpdateAllDateProductController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;

        const {
            price,
            promotion,
            sku,
            weight,
            width,
            height,
            depth,
            amount,
            reservedAmount,
            urlVideo,
            buyTogether_id,
            store_id,
        } = req.body;

        const updateDataProduct = new UpdateAllDateProductService();

        const productUpdate = await updateDataProduct.execute({
            product_id,
            price,
            promotion,
            sku,
            weight,
            width,
            height,
            depth,
            amount,
            reservedAmount,
            urlVideo,
            buyTogether_id,
            store_id,
        });

        return res.json(productUpdate);

    }
}

export { UpdateAllDateProductController }