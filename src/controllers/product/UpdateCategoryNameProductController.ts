import { Request, Response } from 'express';
import { UpdateCategoryNameProductService } from '../../services/product/UpdateCategoryNameProductService';

class UpdateCategoryNameProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id;

    const { categoryName } = req.body;

    const updatecategoryName = new UpdateCategoryNameProductService();

    const product = await updatecategoryName.execute({
      product_id,
      categoryName,
    });

    return res.json(product);
    
  }
}

export { UpdateCategoryNameProductController }