import { Request, Response } from 'express';
import { DeleteMenuIDService } from '../../../services/category/menuCategory/DeleteMenuIDService';

class DeleteMenuIDController {
    async handle(req: Request, res: Response) {
        const menuCategory_id = req.query.menuCategory_id as string;

        const findsItens = new DeleteMenuIDService();

        const finds = await findsItens.execute({ menuCategory_id });

        return res.json(finds);
    }
}

export { DeleteMenuIDController }