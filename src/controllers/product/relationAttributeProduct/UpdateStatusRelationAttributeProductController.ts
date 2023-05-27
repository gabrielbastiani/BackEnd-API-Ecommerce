import { Request, Response } from 'express'
import { UpdateStatusRelationAttributeProductService } from '../../../services/product/relationAttributeProduct/UpdateStatusRelationAttributeProductService';

class UpdateStatusRelationAttributeProductController {
  async handle(req: Request, res: Response) {
    const relationAttributeProduct_id = req.query.relationAttributeProduct_id as string;

    const statusRelation = new UpdateStatusRelationAttributeProductService();

    const status = await statusRelation.execute({
      relationAttributeProduct_id
    });

    return res.json(status);

  }
}

export { UpdateStatusRelationAttributeProductController }