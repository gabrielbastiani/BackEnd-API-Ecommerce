import { Request, Response } from 'express';
import { UpdateTagService } from '../../../services/product/tag/UpdateTagService';

class UpdateTagController {
    async handle(req: Request, res: Response) {
        const tag_id = req.query.tag_id as string;

        const { tagName } = req.body;

        const updateTagName = new UpdateTagService();

        const tag = await updateTagName.execute({
            tag_id,
            tagName
        });

        return res.json(tag);

    }
}

export { UpdateTagController }