import { Request, Response } from 'express'
import { UpdateStatusVariationService } from '../../services/variation/UpdateStatusVariationService'

class UpdateStatusVariationController {
  async handle(req: Request, res: Response) {
    const variation_id = req.query.variation_id as string;

    const updateStatus = new UpdateStatusVariationService();

    const variation = await updateStatus.execute({
      variation_id
    });

    return res.json(variation);

  }
}

export { UpdateStatusVariationController }