import { Request, Response } from "express";
import { DeleteProductRelationAllService } from "../../../services/product/relationAttributeProduct/DeleteProductRelationAllService";

class DeleteProductRelationAllController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id as string;

    const deleteRelationAtributo = new DeleteProductRelationAllService();

    const atributo = await deleteRelationAtributo.execute({
      product_id,
    });

    return res.json(atributo);
  }
}

export { DeleteProductRelationAllController };