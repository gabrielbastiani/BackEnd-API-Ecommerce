import { Request, Response } from 'express';
import { ListExactPhotoTextoService } from '../../../../services/loja/textoInstitucional/photoTextoInstitucional/ListExactPhotoTextoService';

class ListExactPhotoTextoController {
    async handle(req: Request, res: Response) {
        const imageloja_id = req.query.imageloja_id as string;
        const listExact = new ListExactPhotoTextoService();
        const exactPhoto = await listExact.execute({ imageloja_id });

        return res.json(exactPhoto);
    }
}

export { ListExactPhotoTextoController }