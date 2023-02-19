import { Request, Response } from 'express';
import { UpdateCategoryIDProductService } from '../../services/product/UpdateCategoryIDProductService';

class UpdateCategoryIDProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id;

    const { category_id } = req.body;

    const updatecategoryid = new UpdateCategoryIDProductService();

    const product = await updatecategoryid.execute({
      product_id,
      category_id,
    });

    return res.json(product);
    
  }
}

export { UpdateCategoryIDProductController }