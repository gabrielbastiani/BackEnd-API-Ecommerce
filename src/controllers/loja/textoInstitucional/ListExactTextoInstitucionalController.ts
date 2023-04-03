import { Request, Response } from 'express';
import { ListExactTextInstitucionalService } from '../../../services/loja/textoInstitucional/ListExactTextInstitucionalService';

class ListExactTextoInstitucionalController {
    async handle(req: Request, res: Response) {
        const textoinstitucional_id = req.query.textoinstitucional_id as string;
        const listExact = new ListExactTextInstitucionalService();
        const exactTexto = await listExact.execute({ textoinstitucional_id });

        return res.json(exactTexto);
    }
}

export { ListExactTextoInstitucionalController }