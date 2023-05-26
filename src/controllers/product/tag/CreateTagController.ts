import { Request, Response } from "express";
import { CreateTagService } from "../../../services/product/tag/CreateTagService";

class CreateTagController {
    async handle(req: Request, res: Response) {
        const {
            product_id,
            tagName,
            store_id
        } = req.body;

        const createTag = new CreateTagService();

        const tag = await createTag.execute({
            product_id,
            tagName,
            store_id
        })

        return res.json(tag)

    }
}

export { CreateTagController }