import { Request, Response } from 'express';
import { FindFirstGroupService } from '../../../services/category/groupCategory/FindFirstGroupService';

class FindFirstGroupController {
    async handle(req: Request, res: Response) {
        const listFirst = new FindFirstGroupService();
        const group = await listFirst.execute();

        return res.json(group);
    }
}

export { FindFirstGroupController }