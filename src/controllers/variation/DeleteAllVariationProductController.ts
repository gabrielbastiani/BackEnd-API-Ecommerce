import { Request, Response } from "express";
import { DeleteAllVariationProductService } from "../../services/variation/DeleteAllVariationProductService";

class DeleteAllVariationProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id as string;

    const deleteAllVariation = new DeleteAllVariationProductService();

    const variacaoDelete = await deleteAllVariation.execute({
      product_id
    });

    return res.json(variacaoDelete);
  }
}

export { DeleteAllVariationProductController };