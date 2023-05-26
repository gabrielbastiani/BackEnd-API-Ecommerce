import { Request, Response } from 'express';
import { AllTagService } from '../../../services/product/tag/AllTagService';

class AllTagController {
    async handle(req: Request, res: Response) {

        const listTags = new AllTagService();

        const tags = await listTags.execute();

        return res.json(tags);
    }
}

export { AllTagController }