import { Request, Response } from 'express';
import { DeleteGroupsIDService } from '../../../services/category/groupCategory/DeleteGroupsIDService';

class DeleteGroupsIDController {
    async handle(req: Request, res: Response) {
        const groupCategoy_id = req.query.groupCategoy_id as string;

        const findsItens = new DeleteGroupsIDService();

        const finds = await findsItens.execute({ groupCategoy_id });

        return res.json(finds);
    }
}

export { DeleteGroupsIDController }