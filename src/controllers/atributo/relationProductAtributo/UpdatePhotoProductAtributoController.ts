import { Request, Response } from 'express';
import { UpdatePhotoProductAtributoService } from '../../../services/atributo/relationProductAtributo/UpdatePhotoProductAtributoService';

class UpdatePhotoProductAtributoController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id as string;

    const { photoProduct_id } = req.body;

    const updateRelation = new UpdatePhotoProductAtributoService();

    const relation = await updateRelation.execute({ product_id, photoProduct_id });

    return res.json(relation);
    
  }
}

export { UpdatePhotoProductAtributoController }