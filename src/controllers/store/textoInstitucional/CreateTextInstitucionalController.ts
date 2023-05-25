import { Request, Response } from 'express';
import { CreateTextoInstitucionalService } from '../../../services/store/textoInstitucional/CreateTextoInstitucionalService';

class CreateTextInstitucionalController {
    async handle(req: Request, res: Response) {
        const {
            title,
            slug,
            order,
            posicao,
            slugPosicao,
            description,
            store_id,
        } = req.body;

        const createLojaService = new CreateTextoInstitucionalService();

        const store = await createLojaService.execute({
            title,
            slug,
            order,
            posicao,
            slugPosicao,
            description,
            store_id,
        });

        return res.json(store)
    }
}

export { CreateTextInstitucionalController }