import { Request, Response } from "express";
import { DeleteRelationAttributeProductService } from "../../../services/product/relationAttributeProduct/DeleteRelationAttributeProductService";

class DeleteRelationAttributeProductController {
  async handle(req: Request, res: Response) {
    const relationAttributeProduct_id = req.query.relationAttributeProduct_id as string;

    const deleteAttributeProduct = new DeleteRelationAttributeProductService();

    const attributo = await deleteAttributeProduct.execute({
      relationAttributeProduct_id,
    });

    return res.json(attributo);
  }
}

export { DeleteRelationAttributeProductController };