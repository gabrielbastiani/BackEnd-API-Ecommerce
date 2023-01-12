import { Request, Response } from 'express';
import { UpdateCategoryUProductService } from '../../services/product/UpdateCategoryUProductService';

class UpdateCategoryProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id;

    const { category_id } = req.body;

    const updatecategoryid = new UpdateCategoryUProductService();

    const product = await updatecategoryid.execute({
      product_id,
      category_id,
    });

    return res.json(product);
    
  }
}

export { UpdateCategoryProductController }