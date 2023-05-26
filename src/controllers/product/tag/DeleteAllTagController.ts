import { Request, Response } from "express";
import { DeleteAllTagService } from "../../../services/product/tag/DeleteAllTagService";

class DeleteAllTagController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id as string;

    const deleteTag = new DeleteAllTagService();

    const tag = await deleteTag.execute({
      product_id,
    });

    return res.json(tag);
  }
}

export { DeleteAllTagController };