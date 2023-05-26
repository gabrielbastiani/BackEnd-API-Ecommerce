import { Request, Response } from "express";
import { DeleteDescriptionProductService } from "../../../services/product/descriptionProduct/DeleteDescriptionProductService";

class DeleteDescriptionProductController {
  async handle(req: Request, res: Response) {
    const descriptionProduct_id = req.query.descriptionProduct_id as string;

    const deleteAllDescription = new DeleteDescriptionProductService();

    const descriptions = await deleteAllDescription.execute({
      descriptionProduct_id,
    });

    return res.json(descriptions);
  }
}

export { DeleteDescriptionProductController };