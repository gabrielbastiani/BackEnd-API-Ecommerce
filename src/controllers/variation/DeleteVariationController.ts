import { Request, Response } from "express";
import { DeleteVariationService } from "../../services/variation/DeleteVariationService";

class DeleteVariationController {
  async handle(req: Request, res: Response) {
    const variation_id = req.query.variation_id as string;

    const deleteVariation = new DeleteVariationService();

    const variation = await deleteVariation.execute({
      variation_id
    });

    return res.json(variation);
  }
}

export { DeleteVariationController };