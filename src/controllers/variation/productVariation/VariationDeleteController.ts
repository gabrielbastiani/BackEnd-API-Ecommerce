import { Request, Response } from "express";
import { VariationDeleteService } from "../../../services/variation/productVariation/VariationDeleteService";

class VariationDeleteController {
  async handle(req: Request, res: Response) {
    const productVariation_id = req.query.productVariation_id as string;

    const deleteVariation = new VariationDeleteService();

    const variation = await deleteVariation.execute({
      productVariation_id
    });

    return res.json(variation);
  }
}

export { VariationDeleteController };