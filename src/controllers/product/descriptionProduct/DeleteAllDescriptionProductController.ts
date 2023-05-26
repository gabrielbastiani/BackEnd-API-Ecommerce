import { Request, Response } from "express";
import { DeleteAllDescriptionProductService } from "../../../services/product/descriptionProduct/DeleteAllDescriptionProductService";

class DeleteAllDescriptionProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id as string;

    const deleteAllDescription = new DeleteAllDescriptionProductService();

    const descriptions = await deleteAllDescription.execute({
      product_id,
    });

    return res.json(descriptions);
  }
}

export { DeleteAllDescriptionProductController };