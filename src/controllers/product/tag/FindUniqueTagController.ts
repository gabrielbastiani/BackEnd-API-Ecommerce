import { Request, Response } from "express";
import { FindUniqueTagService } from "../../../services/product/tag/FindUniqueTagService";

class FindUniqueTagController {
  async handle(req: Request, res: Response) {
    const tag_id = req.query.tag_id as string;

    const deleteTag = new FindUniqueTagService();

    const tagFind = await deleteTag.execute({
      tag_id,
    });

    return res.json(tagFind);
  }
}

export { FindUniqueTagController };