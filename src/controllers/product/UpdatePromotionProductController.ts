import { Request, Response } from 'express';
import { UpdatePromotionProductService } from '../../services/product/UpdatePromotionProductService';

class UpdatePromotionProductController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;

        const { promotion } = req.body;

        const updateDataProduct = new UpdatePromotionProductService();

        const productUpdate = await updateDataProduct.execute({
            product_id,
            promotion
        });

        return res.json(productUpdate);

    }
}

export { UpdatePromotionProductController }