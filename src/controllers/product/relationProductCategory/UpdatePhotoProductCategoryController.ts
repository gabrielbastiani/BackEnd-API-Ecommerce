import { Request, Response } from 'express';
import { UpdatePhotoProductCategoryService } from '../../../services/product/relationProductCategory/UpdatePhotoProductCategoryService';

class UpdatePhotoProductCategoryController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id as string;

    const { photoProduct_id } = req.body;

    const updateRelation = new UpdatePhotoProductCategoryService();

    const relation = await updateRelation.execute({ product_id, photoProduct_id });

    return res.json(relation);
    
  }
}

export { UpdatePhotoProductCategoryController }