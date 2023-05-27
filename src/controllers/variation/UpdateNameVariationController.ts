import { Request, Response } from 'express';
import { UpdateNameVariationService } from '../../services/variation/UpdateNameVariationService';

class UpdateNameVariationController {
  async handle(req: Request, res: Response) {
    const variation_id = req.query.variation_id as string;

    const { name, slug } = req.body;

    const updateName = new UpdateNameVariationService();

    const variation = await updateName.execute({
      variation_id,
      name,
      slug
    });

    return res.json(variation);

  }
}

export { UpdateNameVariationController }