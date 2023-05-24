import { Request, Response } from 'express';
import { CreateTextoInstitucionalService } from '../../../services/loja/textoInstitucional/CreateTextoInstitucionalService';

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

        const loja = await createLojaService.execute({
            title,
            slug,
            order,
            posicao,
            slugPosicao,
            description,
            store_id,
        });

        return res.json(loja)
    }
}

export { CreateTextInstitucionalController }