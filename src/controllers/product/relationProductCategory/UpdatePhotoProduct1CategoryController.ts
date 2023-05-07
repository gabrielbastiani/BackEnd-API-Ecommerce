import { Request, Response } from 'express';
import { UpdatePhotoProduct1CategoryService } from '../../../services/product/relationProductCategory/UpdatePhotoProduct1CategoryService';

class UpdatePhotoProduct1CategoryController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id as string;

    const { photoProduct_id1 } = req.body;

    const updateRelation = new UpdatePhotoProduct1CategoryService();

    const relation = await updateRelation.execute({ product_id, photoProduct_id1 });

    return res.json(relation);
    
  }
}

export { UpdatePhotoProduct1CategoryController }