import { Request, Response } from "express";
import { DeleteTagService } from "../../../services/product/tag/DeleteTagService";

class DeleteTagController {
  async handle(req: Request, res: Response) {
    const tag_id = req.query.tag_id as string;

    const deleteTag = new DeleteTagService();

    const tag = await deleteTag.execute({
      tag_id,
    });

    return res.json(tag);
  }
}

export { DeleteTagController };