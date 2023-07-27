import { Request, Response } from "express";
import { DeleteProductVariationService } from "../../../services/productVariation/DeleteProductVariationService";

class DeleteProductVariationController {
  async handle(req: Request, res: Response) {
    const variation_id = req.query.variation_id as string;

    const deleteAllVariation = new DeleteProductVariationService();

    const variacaoDelete = await deleteAllVariation.execute({
      variation_id
    });

    return res.json(variacaoDelete);
  }
}

export { DeleteProductVariationController };