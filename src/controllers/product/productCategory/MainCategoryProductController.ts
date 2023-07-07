import { Request, Response } from 'express';
import { MainCategoryProductService } from '../../../services/product/productCategory/MainCategoryProductService';

class MainCategoryProductController {
  async handle(req: Request, res: Response) {
    const { productCategory_id, product_id } = req.query;

    const updateCategory = new MainCategoryProductService();

    const category = await updateCategory.execute({
      productCategory_id,
      product_id
    });

    return res.json(category);

  }
}

export { MainCategoryProductController }