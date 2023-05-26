import { Request, Response } from 'express';
import { UpdateStatusRelationCategoryService } from '../../../services/product/productCategory/UpdateStatusCategoryProductService';

class UpdateStatusCategoryProductController {
  async handle(req: Request, res: Response) {
    const productCategory_id = req.query.productCategory_id as string;

    const updateCategory = new UpdateStatusRelationCategoryService();

    const category = await updateCategory.execute({
      productCategory_id
    });

    return res.json(category);

  }
}

export { UpdateStatusCategoryProductController }