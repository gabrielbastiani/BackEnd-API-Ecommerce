import { Request, Response } from 'express';
import { FindUniqueInstitutionalTextService } from '../../../services/store/institutionalText/FindUniqueInstitutionalTextService';

class FindUniqueInstitutionalTextController {
    async handle(req: Request, res: Response) {
        const institutionalText_id = req.query.institutionalText_id as string;
        const listExact = new FindUniqueInstitutionalTextService();
        const findText = await listExact.execute({ institutionalText_id });

        return res.json(findText);
    }
}

export { FindUniqueInstitutionalTextController }