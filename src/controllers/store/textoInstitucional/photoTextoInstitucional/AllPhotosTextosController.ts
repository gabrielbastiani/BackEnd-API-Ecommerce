import { Request, Response } from 'express';
import { AllPhotosTextosService } from '../../../../services/store/textoInstitucional/photoTextoInstitucional/AllPhotosTextosService';

class AllPhotosTextosController {
    async handle(req: Request, res: Response) {
        const textoinstitucional_id = req.query.textoinstitucional_id as string;
        
        const listPhotosTextos = new AllPhotosTextosService();

        const photosTextos = await listPhotosTextos.execute({ textoinstitucional_id });

        return res.json(photosTextos);
    }
}

export { AllPhotosTextosController }