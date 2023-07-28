import { Request, Response } from "express";
import { DeleteVariationProductService } from "../../../services/product/productVariation/DeleteVariationProductService";

class DeleteVariationProductController {
  async handle(req: Request, res: Response) {
    const productVariation_id = req.query.productVariation_id as string;

    const deleteAllVariation = new DeleteVariationProductService();

    const variacaoDelete = await deleteAllVariation.execute({
      productVariation_id
    });

    return res.json(variacaoDelete);
  }
}

export { DeleteVariationProductController };